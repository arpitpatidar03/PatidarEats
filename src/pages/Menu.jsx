import React, { useState, useMemo } from 'react';
import FoodCard from '../components/FoodCard';
import { foodItems } from '../data/foodData';
import CategorySection from '../components/CategorySection';
const Menu = () => {
  const [foodType, setFoodType] = useState('All'); 
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredFoods = useMemo(() => {
    return foodItems.filter((item) => { 
      const matchType = foodType === 'All' || item.type === foodType;
      const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchType && matchSearch;
    });
  }, [foodType, searchQuery]);
  
  return (
    <div className="page-container">
      <h1 className="page-title">Our Menu</h1>
    <CategorySection/>
      <div className="menu-toolbar">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search for dishes..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
          
        <div className="filter-group">
          {['All', 'veg', 'non-veg'].map((type) => (
            <button 
              key={type}
              className={`filter-btn ${foodType === type ? 'active' : ''}`} 
              onClick={() => setFoodType(type)}
            >
              {type === 'All' ? 'All' : type === 'veg' ? 'Veg Only' : 'Non-Veg Only'}
            </button>
          ))}
        </div>
        
      </div>
    
      <div className="food-grid">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((item) => <FoodCard key={item.id} item={item} />)
        ) : (
          <div className="no-results">
            <h3>No results found</h3>
            <p>Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;