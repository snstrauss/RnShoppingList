import React, {useContext} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ListItem from './listItem';
import {ItemsContext} from '../contexts/items.context';

export default function ProductList() {
  const {items} = useContext(ItemsContext);

  return (
    <FlatList
      style={S.list}
      data={items}
      renderItem={({item}) => <ListItem item={item} />}
    />
  );
}

const S = StyleSheet.create({
  list: {
    borderColor: 'blue',
    borderWidth: 5,
  },
});
