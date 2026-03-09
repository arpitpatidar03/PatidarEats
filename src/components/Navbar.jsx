import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const location = useLocation(); 

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'My Orders', path: '/orders' }, 
    { name: 'About', path: '/about' }
  ];

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        
        <div className="navbar-logo">
          <Link to="/">Patidar<span>Eats</span></Link>
        </div>

        <ul className="nav-capsule">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={location.pathname === link.path ? 'active-pill' : ''}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar-cart">
          <Link to="/cart">
            <button className="cart-btn-modern">
              🛒 Cart <span>({cart.length})</span>
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;