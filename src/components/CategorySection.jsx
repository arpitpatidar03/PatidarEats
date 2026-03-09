import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 1, name: "Burger", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=200&q=80" },
  { id: 2, name: "Pizza", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=200&q=80" },
  { id: 3, name: "Sushi", image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=200&q=80" },
  { id: 4, name: "Healthy", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=80" }
];

const CategorySection = () => {
  const navigate = useNavigate();

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Explore Categories</h2>

      <div style={styles.grid}>
        {categories.map((cat) => (
          <div key={cat.id} style={styles.categoryWrapper}>
            <div
              className="category-card" 
              style={styles.card}
              onClick={() => navigate(`/category/${cat.name}`)}
            >
              <img src={cat.image} alt={cat.name} style={styles.image} />
            </div>
            <p style={styles.catName}>{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '3rem 5%',
    textAlign: 'center',
    background: '#ffffff' 
  },
  heading: {
    marginBottom: '2rem',
    color: '#1c1c1c',
    fontSize: '1.8rem',
    fontWeight: '700'
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2.5rem',
    flexWrap: 'wrap'
  },
  categoryWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.8rem'
  },
  card: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow: '0 6px 15px rgba(0,0,0,0.08)',
    border: '3px solid transparent',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  catName: {
    fontWeight: '600',
    color: '#4f4f4f',
    fontSize: '0.95rem'
  }
};

export default CategorySection;