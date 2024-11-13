import React from 'react';
import styles from './Contact.module.css';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div name="Contact" className={styles.contact}>
      <h2>Contact</h2>
      <ContactForm />
    </div>
  );
};

export default Contact;
