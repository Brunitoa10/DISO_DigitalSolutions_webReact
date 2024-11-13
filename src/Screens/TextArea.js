import React from 'react';
import styles from './Contact.module.css';

const TextArea = ({ label, id, name, className }) => (
  <div className={styles.textAreaContainer}>
    <label htmlFor={id}>{label}</label>
    <textarea id={id} name={name} className={className}></textarea>
  </div>
);

export default TextArea;
