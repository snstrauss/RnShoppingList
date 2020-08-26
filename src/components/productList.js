import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ListItem from './listItem';

export default function ProductList({items = []}) {
  return <FlatList style={S.list} data={items} renderItem={ListItem} />;
}

const S = StyleSheet.create({
  list: {
    borderColor: 'blue',
    borderWidth: 5,
  },
});
