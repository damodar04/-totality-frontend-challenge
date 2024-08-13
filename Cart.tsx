import React from 'react';

interface CartItem {
  id: number;
  title: string;
  bookingDate: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onRemove, onUpdateQuantity }) => {
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <h4>{item.title}</h4>
          <p>Date: {item.bookingDate}</p>
          <p>Price: ${item.price}/night</p>
          <input
            type="number"
            value={item.quantity}
            onChange={e => onUpdateQuantity(item.id, +e.target.value)}
            min="1"
          />
          <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total Cost: ${totalCost}</h3>
    </div>
  );
};

export default Cart;
