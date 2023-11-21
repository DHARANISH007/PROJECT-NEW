// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>
        <p>&copy; 2023 Joyful Moments. All rights reserved.</p>
      </div>
      <div style={additionalInfoStyle}>
        <p>Contact Us: contact@joyfulmoments.com</p>
        <p>Visit Our Gift Shop at 123 Gift Street, Cityville</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#E43c90',
  color: '#fff',
  textAlign: 'center',
  padding: '20px 10px',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

const additionalInfoStyle = {
  marginTop: '10px',
};

export default Footer;
