import React, {useContext} from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {ItemsContext} from '../contexts/items.context';

export default function ListItem({item}) {
  const {
    methods: {removeItem},
  } = useContext(ItemsContext);

  return (
    <TouchableOpacity style={S.item}>
      <View style={S.content}>
        <Text style={S.text}>{item.name}</Text>
        <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => removeItem(item)}
        />
      </View>
    </TouchableOpacity>
  );
}

const S = StyleSheet.create({
  item: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
  },
});
