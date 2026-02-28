import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProductDetailScreen = ({ route, navigation }) => {
  // Recebe o produto passado por parâmetro na navegação
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      
      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.brand}>{product.brand}</Text>
        
        <View style={styles.priceContainer}>
          <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
          {product.discountPercentage && (
            <Text style={styles.discount}>-{product.discountPercentage}% OFF</Text>
          )}
        </View>

        <Text style={styles.description}>{product.description}</Text>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Voltar para a Loja</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  brand: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  price: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#28a745',
    marginRight: 10,
  },
  discount: {
    fontSize: 14,
    color: '#dc3545',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default ProductDetailScreen;