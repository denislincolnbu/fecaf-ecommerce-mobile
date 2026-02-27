import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { getProductsByCategory } from '../services/api';
import { useDispatch } from 'react-redux';
import { logout } from '../store/userSlice';
import ProductCard from '../components/ProductCard';

export default function HomeScreen({ route, navigation }) {
  const { category } = route.params; // Recebe 'mens' ou 'womens' das Tabs
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // Mapeamento das categorias exigidas pelo roteiro
  const categoriesMap = {
    mens: ['mens-shirts', 'mens-shoes', 'mens-watches'],
    womens: ['womens-bags', 'womens-dresses', 'womens-jewellery', 'womens-shoes', 'womens-watches']
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    try {
      setLoading(true); // Tratamento de estado de carregamento
      const subCategories = categoriesMap[category];
      
      // Consumo de API REST via Axios
      const requests = subCategories.map(sub => getProductsByCategory(sub));
      const responses = await Promise.all(requests);
      
      // Une todos os produtos das subcategorias em uma única lista
      const allProducts = responses.flatMap(res => res.data.products);
      setProducts(allProducts);
    } catch (error) {
      console.error("Erro ao buscar produtos da API:", error); // Tratamento de erro
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    dispatch(logout()); // Limpa dados armazenados (Requisito 4)
    navigation.replace('Login'); // Retorna à tela de login
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Carregando catálogo...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header com título e botão de Logout */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Catálogo {category === 'mens' ? 'Masculino' : 'Feminino'}
        </Text>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

      {/* Listagem de Produtos usando o componente ProductCard */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard 
            item={item} 
            onPress={() => navigation.navigate('Details', { id: item.id })} // Navegação com parâmetro de ID
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', paddingHorizontal: 15