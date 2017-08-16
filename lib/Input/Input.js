import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.css'

const Input = ({ className, ...props }) => (
  <input
    className={[styles.input, className].join(' ')}
    {...props} />
)

Input.propTypes = {
  className: PropTypes.string
}

Input.defaultProps = {
  className: ''
}

export default Input
