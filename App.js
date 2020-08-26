import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Header from './src/components/header';
import ProductList from './src/components/productList';
import {getItems} from './src/services/items.service';

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems(25).then(setItems);
  }, []);

  return (
    <SafeAreaView style={S.app}>
      <Header title="Shopping List" />
      <ProductList items={items} />
    </SafeAreaView>
  );
}

const S = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 30,
  },
  userImage: {
    borderWidth: 4,
    borderColor: 'blue',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
