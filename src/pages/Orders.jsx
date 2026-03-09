import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Orders = () => {
  const { orderHistory } = useCart(); //

  return (
    <div className="page-container">
      <h1 className="page-title">My Order History</h1>
      
      {orderHistory.length === 0 ? (
        <div className="empty-state" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <div style={{ fontSize: '4rem' }}>📦</div>
          <h2>No orders yet!</h2>
          <p>Looks like you haven't ordered anything from PatidarEats.</p>
          <Link to="/menu"><button className="cta-btn" style={{marginTop: '1rem'}}>Order Now</button></Link>
        </div>
      ) : (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {orderHistory.map((order) => (
            <div key={order.id} style={{ 
              background: 'white', padding: '1.5rem', borderRadius: '16px', 
              border: '1px solid #ebebeb', marginBottom: '1.5rem', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' 
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f2f6', paddingBottom: '10px', marginBottom: '10px' }}>
                <span style={{ fontWeight: '700', color: '#e23744' }}>{order.id}</span>
                <span style={{ fontSize: '0.9rem', color: '#696969' }}>{order.date}</span>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <p style={{ fontWeight: '600' }}>Items:</p>
                <p style={{ color: '#4f4f4f' }}>{order.items.map(i => i.name).join(', ')}</p>
              </div>
              <div style={{ borderTop: '1px dashed #eee', paddingTop: '10px', textAlign: 'right' }}>
                <h3 style={{ color: '#1c1c1c' }}>Total Paid: ₹{order.totalAmount}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;