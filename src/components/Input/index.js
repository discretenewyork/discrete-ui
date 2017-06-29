import React from 'react'
import styles from './styles.css'

const Input = ({className, ...props}) => (
  <input
    className={[styles.input, className].join(' ')}
    {...props}
  />
)

export default Input
