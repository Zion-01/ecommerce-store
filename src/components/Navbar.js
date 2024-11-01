import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ cartItems }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">Car Center</Link>
      </div>
      <div className="navbar-right">
        <Link to="/products" className="navbar-link">Products</Link>
        <Link to="/cart" className="navbar-link">Cart ({cartItems.length})</Link>
        <Link to="/login" className="navbar-link">Login</Link>
        <Link to="/checkout" className='navbar-link'>Checkout</Link>
        <Link to="/login" className='navbar-link'>Sign-Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
