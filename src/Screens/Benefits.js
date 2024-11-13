import React from 'react';
import { AiOutlineRise, AiOutlineSchedule } from "react-icons/ai";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { FaMoneyBillAlt, FaPeopleCarry } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";
import styles from './Benefits.module.css';

const Benefits = () => {
  const benefitsList = [
    { text: "You open up to the world", icon: <BsFillDoorOpenFill /> },
    { text: "New customers", icon: <FaPeopleCarry /> },
    { text: "Much lower costs", icon: <FaMoneyBillAlt /> },
    { text: "No schedules", icon: <AiOutlineSchedule /> },
    { text: "Ultrasegmented marketing + high conversion", icon: <AiOutlineRise /> },
    { text: "Automation, less work, more performance", icon: <FiRepeat /> },
  ];

  return (
    <div name="Benefits" className={styles.Benefits}>
      <h2 className={styles.benefitTitle}>Benefits of having a professional web</h2>
      {benefitsList.map((benefit, index) => (
        <div className={styles.benefitItem} key={index}>
          <span className={styles.icon}>{benefit.icon}</span>
          <p>{benefit.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
