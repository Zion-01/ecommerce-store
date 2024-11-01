import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart({ cartItems }) {
  if (cartItems.length === 0) {
    return <div className="cart">Your cart is empty.</div>;
  }

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={`/images/${item.image}`} alt={item.name} className="cart-item-image" />
          <div className="cart-item-details">
            <h2>{item.name}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
          </div>
        </div>
      ))}
      <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
    </div>
  );
}

export default Cart;
