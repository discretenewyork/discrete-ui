import React from 'react'
import styles from './Section.css'

const Section = ({ title, description, notes, children }) => (
  <section className={styles.section}>
    <div className={styles.infoWrap}>
      <h2>{title}</h2>
      <p>{description}</p>
      <aside>{notes}</aside>
    </div>
    <div className={styles.componentWrap}>
      {children}
    </div>
  </section>
)

export default Section
