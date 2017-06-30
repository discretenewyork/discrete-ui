import React from 'react'
import Input from 'components/Input'
import styles from './Search.css'

const Search = ({ className, placeholder, ...props }) => (
  <div className={[styles.search, className].join(' ')}>
    <Input placeholder={placeholder} {...props} />
  </div>
)

Search.defaultProps = {
  placeholder: 'Search...',
  className: ''
}

export default Search
