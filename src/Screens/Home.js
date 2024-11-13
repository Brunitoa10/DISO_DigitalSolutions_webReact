import React from 'react'
import { Link } from 'react-scroll'
import styles from './Home.module.css'
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.titleContainer}>
        <p>
          Expand your <br/>
          <b>business</b>
        </p>
        <p>
          Whith the best <br/>
          <b>online presence</b>
        </p>
        <p>
          <b>Don't be left behind</b>
        </p>
      </div>
      <div className={styles.contactContainer}>
        <Link to="contact" smooth duration={500} className={styles.callToAction}>Get in Touch</Link>
        <Link to="contact" smooth duration={500} className={styles.callToAction}>Get a Quota</Link>
      </div>
    </div>
  )
}

export default Home