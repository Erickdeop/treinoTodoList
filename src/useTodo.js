import { useState } from "react";
const useTodo = () => {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    const itemObject = {
      item,
      id: crypto.randomUUID(),
    };
    setItems([...items, itemObject]);
  };

  const removeItem = (id) => {
    //atualizar estado removendo o item
  };

  return {
    items,
    addItem,
    removeItem,
  };
};
export default useTodo;
