import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {ItemsContext} from '../contexts/items.context';

export default function Header({title}) {
  const [newItemText, setNewItemText] = useState();
  const {
    methods: {addItem},
  } = useContext(ItemsContext);

  function addToList() {
    setNewItemText((currentText) => {
      addItem(currentText);

      return;
    });
  }

  return (
    <View style={S.base}>
      <Text style={S.text}>{title}</Text>
      <View style={S.inputContainer}>
        <TextInput
          value={newItemText}
          style={S.input}
          placeholder="Add Item.."
          placeholderTextColor="red"
          onChangeText={setNewItemText}
          onSubmitEditing={addToList}
        />
        <TouchableOpacity style={S.addButton} onPress={addToList}>
          <Icon name="plus" size={20} />
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

Header.defaultProps = {title: 'Header Title'};

const S = StyleSheet.create({
  base: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
    flexDirection: 'row',
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: 'purple',
    flexDirection: 'row',
    flex: 2,
  },
  text: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    flex: 1,
  },
  input: {
    color: 'white',
    borderWidth: 2,
    borderColor: 'red',
    flex: 1,
  },
  addButton: {},
});
