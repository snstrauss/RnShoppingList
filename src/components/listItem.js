import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

// import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function ListItem({item}) {
  return (
    <TouchableOpacity style={S.item}>
      <View style={S.content}>
        <Text style={S.text}>{item.name}</Text>
        {/* <Icon name="remove" size={20} color="firebrick" /> */}
        <Text style={S.delete}>X</Text>
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
  delete: {
    color: 'red',
  },
});
