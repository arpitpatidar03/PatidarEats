import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  const addToCart = (item) => {
    const cartItem = { ...item, cartId: Math.random().toString(36).substring(2, 9) };
    setCart((prevCart) => [...prevCart, cartItem]);
    
    alert(`😋 Mazedaar! ${item.name} aapke cart mein add ho gaya hai.`); 
  };

  const removeFromCart = (cartId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartId !== cartId));
  };

  const placeOrder = (items, total) => {
    const newOrder = {
      id: `#ORD-${Math.floor(Math.random() * 9000) + 1000}`,
      date: new Date().toLocaleString(),
      items: [...items],
      totalAmount: total
    };
    setOrderHistory((prev) => [newOrder, ...prev]);
    setCart([]); 
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, orderHistory, placeOrder }}>
      {children}
    </CartContext.Provider>
  );
};