import React from 'react'
import Input from 'components/Input'
import styles from './styles.css'

const Search = ({ className, placeholder, ...props }) => (
  <div className={[styles.search, className]}>
    <Input placeholder={placeholder} {...props} />
  </div>
)

Search.defaultProps = {
  placeholder: 'Search...'
}

export default Search
