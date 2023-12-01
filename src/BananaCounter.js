/**
 * Represents a Banana Counter component.
 * @component
 */
import React, { useState } from 'react';
import './BananaCounter.css';

const BananaCounter = () => {
  const [product, setProduct] = useState({
    name: 'Bananas',
    quantity: 0,
  });

  const increaseQuantity = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      quantity: prevProduct.quantity + 1,
    }));
  };

  const decreaseQuantity = () => {
    if (product.quantity > 0) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        quantity: prevProduct.quantity - 1,
      }));
    }
  };

  const sendEmail = () => {
    if (product.quantity === 0) {
      try {
        // Simulating an API call to send email
        throw new Error('Failed to send email');
      } catch (error) {
        console.error('Error sending email:', error.message);
      }
    }
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setProduct((prevProduct) => ({
      ...prevProduct,
      quantity: isNaN(newQuantity) ? 0 : newQuantity,
    }));
  };

  return (
    <div className="main-content">
      <h1>Welcome to Banana Counter App</h1>
      <h2>Product: {product.name}</h2>
      <h3>Quantity: {product.quantity}</h3>
      <div >
        <button className="counter-buttons" onClick={increaseQuantity}>+</button>
        <input
          type="number"
          value={product.quantity}
          onChange={handleQuantityChange}
        />
        <button className="counter-buttons" onClick={decreaseQuantity}>-</button>
      </div>
      {product.quantity === 0 && (
        <button className="counter-buttons" onClick={sendEmail}>Send Email</button>
      )}
      {product.quantity < 0 && (
        <p className="error-message">Error: Quantity cannot be negative</p>
      )}
    </div>
  );
};

export default BananaCounter;