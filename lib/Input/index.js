import React from 'react'
import PropTypes from 'prop-types'
import InputWrap from './InputWrap'
import InputError from './InputError'
import Adornment from './Adornment'

const Input = ({ pre, post, error, label, ...props }) => (
  <InputWrap>
    {label ? <label>{label}</label> : null}
    {pre ? <Adornment>{pre}</Adornment> : null}
    <input {...props} />
    {post ? <Adornment>{post}</Adornment> : null}
    {error && props.value.length > 0 ?
      <InputError>{error}</InputError> : null}
  </InputWrap>
)

Input.propTypes = {
  pre: PropTypes.node,
  post: PropTypes.node,
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string
}

Input.defaultProps = {
  pre: null,
  post: null,
  label: null,
  error: null,
  value: ''
}

export default Input
