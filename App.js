import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function App() {
  return (
    <View style={S.app}>
      <Text style={S.text}>Hello Shop</Text>
      <Image style={S.userImage} source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} />
    </View>
  );
}

const S = StyleSheet.create({
  app: {
    borderColor: 'red',
    borderWidth: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
  userImage: {
    borderWidth: 4,
    borderColor: 'blue',
    width: 100,
    height: 100,
    borderRadius: 50
  },
});
