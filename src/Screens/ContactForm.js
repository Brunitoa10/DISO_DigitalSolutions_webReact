import React from 'react';
import styles from './Contact.module.css';
import Input from './Input';
import TextArea from './TextArea';

const ContactForm = () => {
  return (
    <form className={styles.form} method="POST" action="https://getform.io/f/bejjloga">
      <Input label="Name" id="Name" name="Name" className={styles.input} />
      <Input label="Email" id="Email" name="Email" type="email" className={styles.input} />
      <TextArea label="Message" id="Message" name="Message" className={styles.textArea} />
      <button type="submit" className={styles.submitButton}>Send</button>
    </form>
  );
};

export default ContactForm;
