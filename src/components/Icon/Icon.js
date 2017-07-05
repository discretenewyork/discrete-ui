import React from 'react'
import PropTypes from 'prop-types'
import styles from './Icon.css'
import icons from './svg'

const Icon = ({ className, name, width, height, weight }) => {
  const icon = icons[`${name}-${weight}`]
  return (
    <i className={[styles.icon, className].join(' ')}>
      <svg
        width={width}
        height={height}>
        { icon ? <use xlinkHref={`#${icon.id}`} /> : null }
      </svg>
    </i>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  weight: PropTypes.string
}

Icon.defaultProps = {
  className: '',
  weight: 'regular',
  width: null,
  height: null
}

export default Icon
