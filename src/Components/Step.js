import React from 'react'
import styles from './Step.module.css'
export const Step = ({text,step}) => {
  return (
    <div className={styles.Container}>
            <div className={styles.StepContainer}>
                <p className={styles.StepNumber}>{step}</p>
                <p className={styles.text}>{text}</p>
            </div>
        <div className={styles.StepBorder}></div>
    </div>
  )
}
