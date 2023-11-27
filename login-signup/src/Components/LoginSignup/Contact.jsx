// ContactUs.js
import React from 'react';
import './Contact.css';
const ContactUs = () => {
  return (
    
    <div className='contact'>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='bod'>
        <h2>Welcome to our Contact Us page! </h2>
        <p>We value your input and are eager to hear from you. Whether you have questions, feedback, or just want to say hello, please feel free to reach out using the form below.</p>
        <p>  Our team is dedicated to providing timely and helpful responses. </p>
        <p>Your communication is important to us, and we look forward to connecting with you. Thank you for choosing to contact us—we appreciate the opportunity to assist you!</p>
      <p>
        Feel free to reach out to us through the form below or via email at{' '}
        <a href="mailto:contact@example.com">contact@example.com</a>
      </p>
      <p>For queries and doubts contact:</p>
      <p>Number:123456789</p>
      <p>Address:Dubai main road,dubai</p>
      
      <img  width={50} src="https://cdn.iconscout.com/icon/premium/png-512-thumb/whatsapp-2752026-2284843.png?f=webp&w=256"/>
      <img  width={50} src="https://cdn.iconscout.com/icon/free/png-512/free-instagram-188-498425.png?f=webp&w=256"/>
      
      
      </div>
      
    </div>
  );
};

export default ContactUs;
