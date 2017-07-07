import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.css'

const Button = ({ className, children, primary, size, ...props }) => {
  let classes = [styles.button, className]
  if (primary) classes.push(styles.primary)
  if (size && styles[size]) classes.push(styles[size])
  classes = classes.join(' ')

  return (
    <button
      className={classes}
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
  primary: PropTypes.bool,
  size: PropTypes.oneOf([
    'large',
    'small'
  ])
}

Button.defaultProps = {
  className: '',
  primary: false,
  size: null
}

export default Button
