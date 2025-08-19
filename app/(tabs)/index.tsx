import React, { useState } from 'react';
import { FlatList, Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { parsePath } from 'react-router-dom';

// Importa os dados do JSON
import produtosData from '../../assets/json/produtos.json';

export default function ProductListScreen() {
  const [selectedCategory, setSelectedCategory] = useState('PC');
  

  const categories = ['PC', 'Mouse', 'Monitor', 'Headset', 'Mousepad'];

  const filteredProducts = produtosData.produtos.filter(p => p.categoria === selectedCategory);

  type Produto = {
    id: number;
    nome: string;
    imagem: string;
    categoria: string;
    preco: number;
  };

  const renderProduct = ({ item }: { item: Produto }) => {
    console.log(item.imagem);
    return (
      <TouchableOpacity style={styles.card}>
        <Image source={{ uri: item.imagem}} style={styles.image} resizeMode="contain" />
        <Text style={styles.name}>{item.nome}</Text>
        <Text style={styles.price}>R$ {item.preco}</Text>
      </TouchableOpacity>
    );
  };

  

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
      <ScrollView horizontal>
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => produtosData.produtos.indexOf(item).toString()}
          renderItem={renderProduct}
          contentContainerStyle={styles.list}
        />
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  backgroundColor: '#fff' },
  tabs: { flexGrow: 0, marginVertical: 10, paddingHorizontal: 10 },
  tab: { paddingVertical: 8, paddingHorizontal: 15, borderRadius: 20, backgroundColor: '#eee', marginRight: 10 },
  activeTab: { backgroundColor: '#007bff' },
  tabText: { fontSize: 16, color: '#333' },
  activeTabText: { color: '#fff', fontWeight: 'bold' },
  list: { padding: 20, flex: 1, flexDirection: "row", flexWrap: 'wrap' },
  card: { width: 300, height: 300, marginBottom: 20, backgroundColor: '#f9f9f9', borderRadius: 10, padding: 15, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, shadowRadius: 5, elevation: 3 },
  image: { width: 150, height: 150, marginBottom: 10 },
  name: { fontSize: 18, fontWeight: 'bold', marginBottom: 5, textAlign: 'center', textOverflow: 'ellipsisn' },
  price: { fontSize: 16, color: '#28a745' },
});
