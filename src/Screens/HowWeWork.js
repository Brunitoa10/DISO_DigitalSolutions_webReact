import React from 'react';
import { Step } from '../Components/Step'; // Asegúrate de que el nombre del archivo Step.js sea correcto y esté en la ruta indicada
import styles from './HowWeWork.module.css';

const HowWeWork = () => {
  const steps = [
    { id: 1, text: "You tell us your proposal." },
    { id: 2, text: "We design your site and do a review." },
    { id: 3, text: "We develop your website." },
    { id: 4, text: "We deploy your website." },
    { id: 5, text: "You enjoy all the benefits of having a website for your company." },
  ];

  return (
    <div name="HowWeWork" className={styles.HowWeWork}>
      <h2 className={styles.titleHow}>How We Work</h2>
      {steps.map((x) => (
        <Step text={x.text} step={x.id} key={x.id} />
      ))}
    </div>
  );
};

export default HowWeWork;
