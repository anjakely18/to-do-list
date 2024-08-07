import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    // Initialisez l'état des items avec les données de localStorage ou un tableau vide
    const storedItems = JSON.parse(localStorage.getItem("to-do")) || [];
    return storedItems;
  });

  const toggleItem = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("to-do", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <TaskContext.Provider value={{ items, removeItem, toggleItem, addItem }}>
      {children}
    </TaskContext.Provider>
  );
};
