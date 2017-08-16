import React from 'react'
import PropTypes from 'prop-types'
import styles from './Dropdown.css'

const Dropdown = ({ className, options, title, ...props }) => (
  <select
    className={[styles.dropdown, className].join(' ')}
    {...props}>
    {options.map(o =>
      <option key={o.value} value={o.value}>{o.name}</option>)}
  </select>
)

Dropdown.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
}

Dropdown.defaultProps = {
  title: null,
  className: ''
}

export default Dropdown
