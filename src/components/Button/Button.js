import React from 'react'
import PropTypes from 'prop-types'
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

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  primary: PropTypes.bool
}

Button.defaultProps = {
  className: '',
  primary: false
}

export default Button
