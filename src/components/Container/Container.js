import React from 'react';
import styles from './Container.css';

const Container = ({ className, fluid, text, children, textAlign, ...props }) => {
  const classes = [
    styles.container,
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

export default Container
