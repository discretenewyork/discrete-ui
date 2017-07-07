import React from 'react'
import PropTypes from 'prop-types'
import styles from './Container.css'

const Container = ({ className, fluid, text, children, textAlign, ...props }) => {
  const classes = [
    styles.container,
    className,
    fluid ? styles.fluid : null,
    text ? styles.text : null,
    textAlign ? styles[`align${textAlign}`] : null
  ].filter(c => !!c).join(' ')
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}

Container.propTypes = {
  className: PropTypes.string,
  fluid: PropTypes.bool,
  text: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  textAlign: PropTypes.oneOf([null, 'left', 'center', 'right'])
}

Container.defaultProps = {
  className: '',
  fluid: false,
  text: false,
  textAlign: null
}

export default Container
