import React, { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Importa os dados do JSON
import produtosData from '../../assets/json/produtos.json';

export default function ProductListScreen() {
  const [selectedCategory, setSelectedCategory] = useState('PC');

  const categories = ['PC', 'Mouse', 'Monitor', 'Headset', 'Mousepad'];

  const filteredProducts = produtosData.produtos.filter(p => p.categoria === selectedCategory);

  type Produto = {
    nome: string;
    preco: number;
    categoria: string;
    imagem: string;
  };

  const renderProduct = ({ item }: { item: Produto }) => (
    <View style={styles.card}>
      <Image source={{ uri: `../../assets/images/${item.imagem}` }} style={styles.image} resizeMode="contain" />
      <Text style={styles.name}>{item.nome}</Text>
      <Text style={styles.price}>R$ {item.preco}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Abas */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabs}>
        {categories.map(cat => (
          <TouchableOpacity 
            key={cat} 
            style={[styles.tab, selectedCategory === cat && styles.activeTab]} 
            onPress={() => setSelectedCategory(cat)}
          >
            <Text style={[styles.tabText, selectedCategory === cat && styles.activeTabText]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lista de produtos */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => produtosData.produtos.indexOf(item).toString()}
        renderItem={renderProduct}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  tabs: { flexGrow: 0, marginVertical: 10, paddingHorizontal: 10 },
  tab: { paddingVertical: 8, paddingHorizontal: 15, borderRadius: 20, backgroundColor: '#eee', marginRight: 10 },
  activeTab: { backgroundColor: '#007bff' },
  tabText: { fontSize: 16, color: '#333' },
  activeTabText: { color: '#fff', fontWeight: 'bold' },
  list: { padding: 20 },
  card: { marginBottom: 20, backgroundColor: '#f9f9f9', borderRadius: 10, padding: 15, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, shadowRadius: 5, elevation: 3 },
  image: { width: 150, height: 100, marginBottom: 10 },
  name: { fontSize: 18, fontWeight: 'bold', marginBottom: 5, textAlign: 'center' },
  price: { fontSize: 16, color: '#28a745' },
});
