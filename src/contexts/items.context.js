import React, {createContext, useState, useEffect} from 'react';
import {getItems, removeItem, generateItems} from '../services/items.service';

export const ItemsContext = createContext();

export default function ItemsContextProvider({children}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems(25).then(setItems);
  }, []);

  function removeItemFromList(item) {
    setItems((prevItems) => removeItem(prevItems, item));
  }

  function addItemToList(title) {
    setItems((prevItems) => [...generateItems(1, title), ...prevItems]);
  }

  const contextValue = {
    items,
    methods: {
      removeItem: removeItemFromList,
      addItem: addItemToList,
    },
  };

  return (
    <ItemsContext.Provider value={contextValue}>
      {children}
    </ItemsContext.Provider>
  );
}
