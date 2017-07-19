import React, { Component } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import styles from './Grid.css'

export default class Grid extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    columns: PropTypes.number,
    gutterSize: PropTypes.number
  }

  static defaultProps = {
    children: [],
    className: '',
    columns: 3,
    gutterSize: 1
  }

  render() {
    const { columns, gutterSize, className } = this.props
    const children = React.Children.toArray(this.props.children)
    const rows = []
    while (children.length > 0) {
      rows.push(children.splice(0, columns))
    }

    return (
      <div className={[styles.grid, className].join(' ')}>
        {rows.map((items, i) => (
          <div
            key={shortid.generate()}
            className={styles.row}
            style={{ marginBottom: (i === rows.length - 1) ? 0 : gutterSize }}>
            {items.map((item, j) => (
              <div
                key={shortid.generate()}
                className={styles.item}
                style={{ marginRight: (j === items.length - 1) ? 0 : gutterSize }}>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}
