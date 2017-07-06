import React from 'react'
import PropTypes from 'prop-types'
import styles from './Swatch.css'

const Swatch = ({ color }) => (
  <span className={styles.swatch}>
    <div className={[styles.colorBox, styles[color]].join(' ')} />
    <label htmlFor={color}>{color}</label>
  </span>
)

Swatch.propTypes = {
  color: PropTypes.string.isRequired
}

export default Swatch
