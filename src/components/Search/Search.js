import React from 'react'
import Icon from '../Icon'
import Input from '../Input'
import styles from './Search.css'

const Search = ({ className, placeholder, ...props }) => (
  <div className={[styles.search, className].join(' ')}>
    <Icon name='search'/>
    <Input placeholder={placeholder} {...props} />
  </div>
)

Search.defaultProps = {
  placeholder: 'Search...',
  className: ''
}

export default Search
