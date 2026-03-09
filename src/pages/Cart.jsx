import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {

  const { cart, removeFromCart, placeOrder } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((total, item) => total + item.price, 0);
  const deliveryCharge = subtotal > 0 ? 40 : 0;
  const tax = Math.round(subtotal * 0.05);
  const finalTotal = subtotal + deliveryCharge + tax;

  const handleOrder = () => {
    if (cart.length === 0) {
      alert("Please add some items to your cart first!");
      return;
    }
    
    placeOrder(cart, finalTotal); 

    alert("🎉 Mubarak ho! Aapka order successfully place ho gaya hai. PatidarEats par bharosa karne ke liye shukriya."); 
    navigate("/orders"); 
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Your Food Cart</h1>
      
      {cart.length === 0 ? (
        <div className="empty-state">
          <h2>Your cart is empty! 🛒</h2>
          <button className="cta-btn" onClick={() => navigate("/menu")}>Browse Menu</button>
        </div>
      ) : (
        <div className="cart-wrapper" style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
          
          <div className="cart-items-list">
            {cart.map((item) => (
              <div key={item.cartId} style={{ 
                background: 'white', padding: '1.2rem', borderRadius: '15px', 
                marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', 
                alignItems: 'center', border: '1px solid #eee' 
              }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>{item.name}</h3>
                  <p style={{ color: '#e23744', fontWeight: '700' }}>₹{item.price}</p>
                </div>
                
                <button 
                  onClick={() => removeFromCart(item.cartId)}
                  style={{ 
                    background: '#fff1f1', color: '#e23744', border: '1px solid #ffdada',
                    padding: '8px 15px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600',
                    transition: '0.3s'
                  }}
                  onMouseOver={(e) => { e.target.style.background = '#e23744'; e.target.style.color = '#fff'; }}
                  onMouseOut={(e) => { e.target.style.background = '#fff1f1'; e.target.style.color = '#e23744'; }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="bill-details" style={{ background: '#ffffff', padding: '2rem', borderRadius: '20px', border: '1px solid #ebebeb', height: 'fit-content' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Bill Details</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Item Total</span>
              <span>₹{subtotal}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', color: '#666' }}>
              <span>Delivery & Taxes</span>
              <span>₹{deliveryCharge + tax}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px dashed #eee', paddingTop: '1rem' }}>
              <h2 style={{ fontSize: '1.4rem' }}>Total</h2>
              <h2 style={{ color: '#e23744', fontWeight: '800' }}>₹{finalTotal}</h2>
            </div>
            <button onClick={handleOrder} className="cta-btn" style={{ width: '100%', marginTop: '2rem' }}>
              Place Order
            </button>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Cart;