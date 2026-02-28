import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';

const ProductCard = ({ item, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: item.thumbnail }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.prodName}>{item.title}</Text>
      <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: { flexDirection: 'row', backgroundColor: '#fff', marginBottom: 10, borderRadius: 8, overflow: 'hidden', elevation: 2 },
  image: { width: 100, height: 100 },
  info: { padding: 10, justifyContent: 'center' },
  prodName: { fontSize: 16, fontWeight: 'bold' },
  price: { color: '#28a745', fontSize: 14, marginTop: 5 }
});

export default ProductCard;