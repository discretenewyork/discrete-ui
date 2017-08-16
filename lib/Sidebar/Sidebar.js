import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Sidebar.css'

const SidebarContent = ({ children, className }) => (
  <div className={[styles.sidebarContent, className].join(' ')}>
    {children}
  </div>
)

SidebarContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string
}

SidebarContent.defaultProps = {
  children: null,
  className: ''
}

export default class Sidebar extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  }

  static Content = SidebarContent

  render() {
    return (
      <div className={styles.sidebar}>
        {this.props.children}
      </div>
    )
  }
}
