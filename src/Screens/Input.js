import React from 'react';
import styles from './Contact.module.css';

const Input = ({ label, id, name, type = 'text', className }) => (
  <div className={styles.inputContainer}>
    <label htmlFor={id}>{label}</label>
    <input id={id} name={name} type={type} className={className} />
  </div>
);

export default Input;
