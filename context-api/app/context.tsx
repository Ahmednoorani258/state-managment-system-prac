"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of a cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
}

// Define the shape of the context
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

// Create the Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider Component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add item to cart
  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      // Check if the item already exists in the cart
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (!existingItem) {
        return [...prev, item]; // Add the item to the cart if it doesn't exist
      }
      return prev; // Return the cart unchanged if the item already exists
    });
  };

  // Remove item from cart
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id)); // Remove the item by its id
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]); // Clear the entire cart
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to use Cart Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
