import React from 'react';
import { useParams } from 'react-router-dom';
import { foodItems } from '../data/foodData';
import FoodCard from '../components/FoodCard';

export const Items = () => {
  const { name } = useParams();

  const filteredItems = foodItems.filter(
    (item) => item.category.toLowerCase() === name.toLowerCase()
  );

  return (
    <div className="items-container">
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <FoodCard key={item.id || item.name} item={item} />
        ))
      ) : (
        <p>No items found in this category.</p>
      )}
    </div>
  );
};