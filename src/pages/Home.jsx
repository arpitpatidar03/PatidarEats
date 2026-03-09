import React from 'react';
import { Link } from 'react-router-dom';
import FoodCard from '../components/FoodCard';
import { foodItems } from '../data/foodData';
const Home = () => {
  const featuredFoods = foodItems.slice(0, 4); 

  return (
    <div>
      
      <section className="pro-hero">
        <div className="pro-hero-text">
          
          <h1>Quality Food <br />For <span>Patidar Community</span></h1>
          <p>Experience the finest culinary delights delivered with unmatched speed.</p>
          <Link to="/menu">
            <button className="primary-btn">Explore Menu</button>
          </Link>
        </div>

       
        <div className="pro-hero-img">
          <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80" alt="Gourmet Food" />
        </div>
      </section>

      
      <section className="steps-section">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Choose Your Meal</h3>
            <p>Browse our extensive menu of professionally curated dishes from top chefs.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Quick Checkout</h3>
            <p>Complete your order with our seamless and secure checkout process.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Fast Delivery</h3>
            <p>Track your order in real-time as it arrives hot and fresh at your door.</p>
          </div>
        </div>
      </section>

      <section className="page-container" style={{ paddingTop: '0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#1c1c1c' }}>Popular Dishes</h2>
          <Link to="/menu" style={{ color: '#e23744', textDecoration: 'none', fontWeight: '500' }}>View All &rarr;</Link>
        </div>
        <div className="food-grid">
          {featuredFoods.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;