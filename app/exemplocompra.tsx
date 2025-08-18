import React from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

type Produto = {
  nome: string;
  imagem: string;
  preco: number;
  categoria: string;
}

const productScreen = ({product}: {product: Produto}) => {
  if (product !== null) {
    function handleBuy() {
      Alert.alert('Produto adicionado', `${product.nome} foi adicionado ao carrinho!`);
    }
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image 
          src={`../assets/images/${product.imagem}`} 
          style={styles.image} 
          resizeMode="contain" 
        />

        <Text style={styles.name}>{product.nome}</Text>
        <Text style={styles.price}>R$ {product.preco.toFixed(2)}</Text>
        <Text style={styles.description}>{product.categoria}</Text>

        <TouchableOpacity style={styles.button} onPress={handleBuy}>
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  image: { 
    width: '100%', 
    aspectRatio: 16/9, // mantém proporção (pode trocar pra outro valor)
    borderRadius: 10, 
    marginBottom: 20 
  },
  name: { fontSize: 22, fontWeight: 'bold', marginBottom: 5 },
  price: { fontSize: 20, color: '#28a745', fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, color: '#555', marginBottom: 20 },
  button: { backgroundColor: '#007bff', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});

export default productScreen;