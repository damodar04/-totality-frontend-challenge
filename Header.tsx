import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Property Rental Platform</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
};

export default Header;
