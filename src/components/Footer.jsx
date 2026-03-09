import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: '#1c1c1c', color: 'white', padding: '4rem 5% 2rem', textAlign: 'center', marginTop: 'auto' }}>
      <div>
        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>
          Patidar<span style={{ color: '#e23744' }}>Eats</span>
        </h2>
        <p style={{ margin: '1rem auto', color: '#a0a0a0', maxWidth: '400px', lineHeight: '1.6' }}>
          Delivering premium culinary experiences to your doorstep. Quality ingredients, expert chefs, and lightning-fast delivery.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '2rem 0' }}>
          <span style={{ cursor: 'pointer', color: '#ffffff', fontWeight: '600', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#e23744'} onMouseOut={(e) => e.target.style.color = '#ffffff'}>LinkedIn</span>
          <span style={{ cursor: 'pointer', color: '#ffffff', fontWeight: '600', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#e23744'} onMouseOut={(e) => e.target.style.color = '#ffffff'}>Twitter</span>
          <span style={{ cursor: 'pointer', color: '#ffffff', fontWeight: '600', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#e23744'} onMouseOut={(e) => e.target.style.color = '#ffffff'}>Instagram</span>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #333333', paddingTop: '2rem', marginTop: '1rem' }}>
        <p style={{ fontSize: '0.9rem', color: '#747d8c' }}>
          &copy; {new Date().getFullYear()} Patidar Eats. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;