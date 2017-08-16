import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Form.css'
import Input from '../Input'

const FormInput = ({ label, ...props }) => (
  <div>
    <label className={styles.label}>{label}</label>
    <Input {...props} />
  </div>
)

FormInput.propTypes = {
  label: PropTypes.string.isRequired
}

const FormGroup = ({ children, className }) => (
  <div className={[styles.formGroup, className].join(' ')}>
    {children}
  </div>
)

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

FormGroup.defaultProps = {
  className: ''
}

export default class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  static Group = FormGroup
  static Input = FormInput

  render() {
    const { onSubmit, className, children } = this.props
    return (
      <form
        className={[styles.form, className].join(' ')}
        onSubmit={e => {
          e.preventDefault()
          onSubmit(e)
        }}>
        {children}
      </form>
    )
  }
}
