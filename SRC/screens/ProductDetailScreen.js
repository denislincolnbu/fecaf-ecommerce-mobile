import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { getProductDetails } from '../services/api';

export default function ProductDetailScreen({ route }) {
  const { id } = route.params; // Recebe o ID do produto (Requisito 3.3)
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getProductDetails(id);
      setProduct(response.data);
    } catch (error) {
      console.error("Erro ao cargestar detalhes:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        
        <View style={styles.priceContainer}>
          <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
          <Text style={styles.discount}>-{product.discountPercentage}% OFF</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: '100%', height: 300, resizeMode: 'contain' },
  infoContainer: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, color: '#666', lineHeight: 22, marginBottom: 20 },
  priceContainer: { flexDirection: 'row', alignItems: 'center' },
  price: { fontSize: 22, fontWeight: 'bold', color: '#28a745', marginRight: 15 },
  discount: { fontSize