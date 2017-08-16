import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Menu.css'

const MenuItem = ({ className, children }) => (
  <div className={[styles.item, className].join(' ')}>
    {children}
  </div>
)

MenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string
}

MenuItem.defaultProps = {
  className: ''
}

export default class Menu extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]).isRequired,
    className: PropTypes.string,
    horizontal: PropTypes.bool
  }

  static defaultProps = {
    className: '',
    horizontal: false
  }

  static Item = MenuItem

  render() {
    let classNames = [styles.menu, this.props.className]
    if (this.props.horizontal) classNames.push(styles.horizontal)
    classNames = classNames.join(' ')
    return (
      <div className={classNames}>
        {this.props.children}
      </div>
    )
  }
}
