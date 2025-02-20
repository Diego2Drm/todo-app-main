import React from "react";

export function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem('TODOS', JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }
  const [item, setItem] = React.useState(parsedItem);
  const [itemFilter, setItemFilter] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem('TODOS', JSON.stringify(newItem));
    setItem(newItem);
    setItemFilter(newItem)
  }

  return [item, saveItem, itemFilter ];
}