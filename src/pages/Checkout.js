import React, { useState } from 'react';
import './Checkout.css';

function Checkout({ cartItems }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Submitted', formData);
    // Handle Checkout Process
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="order-summary">
        <h2>Order Summary</h2>
        {cartItems.map(item => (
          <div key={item.id} className="checkout-item">
            <p>{item.name} (x{item.quantity}) - ${item.price}</p>
          </div>
        ))}
        <h3>Total: ${totalAmount}</h3>
      </div>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Shipping Information</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <h2>Payment Information</h2>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="expirationDate"
          placeholder="Expiration Date (MM/YY)"
          value={formData.expirationDate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={formData.cvv}
          onChange={handleChange}
          required
        />
        <button type="submit" className="checkout-button">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
