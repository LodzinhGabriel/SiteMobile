import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CheckoutScreen() {
  const [items, setItems] = useState([
    { id: '1', image: require('@/assets/images/Headset_R$459_99.jpg'), name: 'Headset Gamer Branco', price: 459.99 },
    { id: '2', image: require('@/assets/images/Mousepad_R$219_99.jpg'), name: 'Mousepad Gamer', price: 219.99 },
    { id: '3', image: require('@/assets/images/Mouse_R$459_99.jpg'), name: 'Mouse Gamer Branco', price: 459.99 },
  ]);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  function handleFinalize() {
    // Aqui você coloca sua lógica (API, navegação, etc)
    Alert.alert('Compra Finalizada', 'Obrigado pela sua compra!');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Finalização de Compra</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
          </View>
        )}
      />

      <View style={styles.total}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalValue}>R$ {total.toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleFinalize}>
        <Text style={styles.buttonText}>Finalizar Compra</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderBottomWidth: 1, borderColor: '#ccc' },
  itemName: { fontSize: 16 },
  itemPrice: { fontSize: 16, fontWeight: 'bold' },
  total: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 10 },
  totalText: { fontSize: 18, fontWeight: 'bold' },
  totalValue: { fontSize: 18, fontWeight: 'bold' },
  button: { backgroundColor: '#28a745', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});
