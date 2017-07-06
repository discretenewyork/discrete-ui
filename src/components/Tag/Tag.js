import React from 'react'
import PropTypes from 'prop-types'
import styles from './Tag.css'
import Icon from '../Icon'

const Tag = ({ className, color, name, ...props }) => {
  const classes = [styles.tag]
  if (className) classes.push(className)
  if (color && styles[color]) classes.push(styles[color])

  return (
    <span
      className={classes.join(' ')}
      {...props}>
      <span>{name}</span>
      <Icon name='times' size={8} />
    </span>
  )
}

export default Tag
