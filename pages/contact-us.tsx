import React from 'react';
import Button from '../components/common/Button/Button';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, feel free to reach out to us using the form below or through our contact information.</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your message" required></textarea>
        </div>
        <Button design='primary long' type='submit'>Send Us a Message</Button>
      </form>
      <div className="contact-info">
        <p>Email: <a href="mailto:samuelmthwa79@gmail.com">samuelmthwa79@gmail.com</a></p>
        <p>Phone: +27 7279 323 52</p>
      </div>
    </div>
  );
};

export default ContactUs;
