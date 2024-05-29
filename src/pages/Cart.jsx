import React, { useContext } from 'react';
import '../components/styles/Cart.css';
import Navbar from '../components/Navbar';
import Products from '../assets/products.json';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

function Cart() {
  const { cartItems, addToCart, removeFromCart, removeAllFromCart } = useContext(ShoppingCartContext);
  function explanation (){
    alert('A backend is not available for this project. This is where I would work with the development team to link to the backend for credit card processing and order management.')
  }
  
  // Calculate the subtotal
  const calculateSubtotal = () => {
    return Products.reduce((subtotal, product) => {
      const productQuantity = cartItems[product.id] || 0;
      return subtotal + product.price * productQuantity;
    }, 0).toFixed(2);
  };

  const subtotal = calculateSubtotal();
  const tax= subtotal * .06;

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h1 className="cart-heading">Your Shopping Cart</h1>
        <div className="cart-items">
          {Products.filter(product => cartItems[product.id] > 0).map(product => {
            const cartItemsAmount = cartItems[product.id];
            
            return (
              <div className="cart-item" key={product.id}>
                <img src={product.image} alt={product.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h2 className="cart-item-name">{product.name}</h2>
                  <p className="cart-item-price">${product.price.toFixed(2)}</p>
                  <div className="cart-item-quantity">
                    <button className="quantity-button" onClick={() => removeFromCart(product.id)}>-</button>
                    <span className="quantity">{cartItemsAmount}</span>
                    <button className="quantity-button" onClick={() => addToCart(product.id)}>+</button>
                  </div>
                </div>
                <button className="remove-button" onClick={() => removeAllFromCart(product.id)}>Remove</button>
              </div>
            );
          })}
        </div>
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <p>Subtotal: ${subtotal}</p>
          <p>Tax: ${tax.toFixed(2)}</p> {/* You can add tax calculation logic here */}
          <p>Total: ${subtotal}</p> {/* Assuming no tax for simplicity */}
          <button className="checkout-button" onClick={explanation}>Proceed to Checkout</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
