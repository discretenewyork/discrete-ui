import React from 'react'
import PropTypes from 'prop-types'
import styles from './Section.css'

const Section = ({ title, description, notes, children }) => (
  <section className={styles.section}>
    <div className={styles.infoWrap}>
      <h2>{title}</h2>
      <p>{description}</p>
      <aside>{notes}</aside>
    </div>
    <div className={styles.componentWrap}>
      {children}
    </div>
  </section>
)

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  notes: PropTypes.string
}

Section.defaultProps = {
  notes: null
}

export default Section
