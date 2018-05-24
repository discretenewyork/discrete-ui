import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Checkbox extends Component {
  static propTypes = {
    indeterminate: PropTypes.bool,
    checked: PropTypes.bool
  }

  static defaultProps = {
    indeterminate: false,
    checked: false
  }

  componentDidMount() {
    this.updateIndeterminate()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.indeterminate !== this.props.indeterminate)
      this.updateIndeterminate()
  }

  updateIndeterminate() {
    this.input.indeterminate = this.props.indeterminate
  }

  render() {
    const { indeterminate, ...rest } = this.props
    return (<input
      type='checkbox'
      ref={node => { this.input = node }}
      {...rest} />)
  }
}
