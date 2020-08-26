import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Header from './src/components/header';
import ProductList from './src/components/productList';
import ItemsContextProvider from './src/contexts/items.context';

export default function App() {
  return (
    <SafeAreaView style={S.app}>
      <ItemsContextProvider>
        <Header title="Shopping List" />
        <ProductList />
      </ItemsContextProvider>
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
