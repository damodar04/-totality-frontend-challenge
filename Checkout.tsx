import React, { useState } from 'react';

interface CheckoutProps {
  totalCost: number;
  onConfirmBooking: (details: { name: string; email: string; payment: string }) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ totalCost, onConfirmBooking }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [payment, setPayment] = useState('');

  const handleSubmit = () => {
    onConfirmBooking({ name, email, payment });
  };

  return (
    <div className="checkout">
      <h3>Total Cost: ${totalCost}</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Payment Details"
        value={payment}
        onChange={e => setPayment(e.target.value)}
      />
      <button onClick={handleSubmit}>Confirm Booking</button>
    </div>
  );
};

export default Checkout;
