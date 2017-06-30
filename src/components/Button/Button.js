import React from 'react'
import styles from './Button.css'

const Button = ({ className, children, primary, ...props }) => {
  let cnames = [styles.button, className]
  if (primary) cnames.push(styles.primary)
  cnames = cnames.join(' ')

  return (
    <button
      className={cnames}
      {...props}>
      {children}
    </button>
  )
}

export default Button
