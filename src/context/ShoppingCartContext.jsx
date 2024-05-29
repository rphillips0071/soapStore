import React, { createContext, useState } from 'react';
import Products from '../assets/products.json';

// Create the context
export const ShoppingCartContext = createContext(null);

// Function to initialize the default cart
const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i <= Products.length; i++) {
        cart[i] = 0;
    }
    return cart;
};

// Create the provider component
export const ShoppingCartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart);

    const addToCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
    };

    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
    };

    const removeAllFromCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: 0 }));
    };
    
    const contextValue = { cartItems, addToCart, removeFromCart, removeAllFromCart };

    console.log(cartItems);

    return (
        <ShoppingCartContext.Provider value={contextValue}>
            {props.children}
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartContext;
