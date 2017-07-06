import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import Input from '../Input'
import styles from './Search.css'

const Search = ({ className, placeholder, ...props }) => (
  <div className={[styles.search, className].join(' ')}>
    <Icon name='search' />
    <Input placeholder={placeholder} {...props} />
  </div>
)

Search.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string
}

Search.defaultProps = {
  placeholder: 'Search...',
  className: ''
}

export default Search
