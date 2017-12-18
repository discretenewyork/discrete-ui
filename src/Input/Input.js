import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-input-mask';
import InputLabel from './InputLabel'
import InputWrap from './InputWrap'
import InputError from './InputError'
import Adornment from './Adornment'
import Label from './InputLabel'


const Input = ({ pre, post, error, label, width, ...props }) => (
  <div style={{ width }}>
    {label ? (
      <InputLabel required={props.required}>
        {label}
      </InputLabel>
    ) : null}
    <InputWrap label={label}>
      {pre ? <Adornment>{pre}</Adornment> : null}
      { props.mask ? (
        <MaskedInput {...props} />
      ) : (<input {...props} />)}
      {post ? <Adornment>{post}</Adornment> : null}
    </InputWrap>
    {error && props.value.length > 0 ?
      <InputError>{error}</InputError> : null}
  </div>
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
  value: undefined
}

export default Input
