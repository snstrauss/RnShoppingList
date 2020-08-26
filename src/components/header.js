import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header({title}) {
  return (
    <View style={S.base}>
      <Text style={S.text}>{title}</Text>
    </View>
  );
}

Header.defaultProps = {title: 'Header Title'};

const S = StyleSheet.create({
  base: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    fontSize: 23,
    color: 'white',
    textAlign: 'center',
  },
});
