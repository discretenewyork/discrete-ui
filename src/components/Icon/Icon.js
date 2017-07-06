import React from 'react'
import PropTypes from 'prop-types'
import styles from './Icon.css'
import icons from './svg'

const Icon = ({ className, name, size, weight }) => {
  const icon = icons[`${name}-${weight}`]
  return (
    <i className={[styles.icon, className].join(' ')}>
      <svg width={size} height={size}>
        { icon ? <use xlinkHref={`#${icon.id}`} /> : null }
      </svg>
    </i>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  weight: PropTypes.string
}

Icon.defaultProps = {
  className: '',
  weight: 'regular',
  size: 16
}

export default Icon
