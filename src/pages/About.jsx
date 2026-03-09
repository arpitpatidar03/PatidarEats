import React from 'react';

const About = () => {
  return (
    <div className="page-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="page-title">About Patidar Eats</h1>
      <div style={{ background: 'white', padding: '3.5rem', borderRadius: '16px', border: '1px solid #ebebeb', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', lineHeight: '1.8', color: '#4f4f4f', fontSize: '1.1rem' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          Welcome to <strong style={{color: '#1c1c1c', fontSize: '1.2rem'}}>Patidar<span style={{color: '#e23744'}}>Eats</span></strong>, your premier destination for the most delicious and freshly prepared meals. We are dedicated to providing you with the very best dining experience, with a strong focus on dependability, exceptional customer service, and culinary uniqueness.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          Founded with a passion for connecting food lovers with great meals, Patidar Eats has built a reputation for excellence. We understand that food is not just about sustenance; it's an experience. That's why we partner only with top-rated chefs and restaurants to ensure every bite is memorable.
        </p>
        <p>
          We hope you enjoy our platform and the meals delivered to you as much as we enjoy offering this service. If you have any questions, feedback, or business inquiries, please don't hesitate to reach out.
        </p>
      </div>
    </div>
  );
};

export default About;