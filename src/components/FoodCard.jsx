import React from 'react';
import { useCart } from '../context/CartContext';

const FoodCard = ({ item }) => {
  const { addToCart } = useCart();
  const { name, image, type, price, description } = item;

  return (
    <div className="clean-card">
      <div className="card-img-box">
        <div 
          className={`diet-indicator ${type === 'veg' ? 'veg' : 'non-veg'}`} 
          title={type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
        />
        <img src={image} alt={name} loading="lazy" />
      </div>
      
      <div className="card-body">
        <div className="card-header">
          <h3 className="card-title">{name}</h3>
          <span className="card-price">₹{price}</span>
        </div>
        <p className="card-desc">{description}</p>
        
        <button className="add-btn-clean" onClick={() => addToCart(item)}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default FoodCard;