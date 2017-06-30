import React from 'react'
import styles from './Swatch.css'

const Swatch = ({ color }) => (
  <span className={styles.swatch}>
    <div className={[styles.colorBox, styles[color]].join(' ')}/>
    <label>{color}</label>
  </span>
)

export default Swatch
