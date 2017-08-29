import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = styled.input`
  position:relative;
  outline: none;
  white-space: nowrap;
  width: 16em;
  margin: ${props => {
    if (props.label) return 0.25
    return 1
  }}em 0.5em 1em;
  padding: 0.328em 0.4em;
  border: none;
  background: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.text};
  font-size: 0.825em;
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.mono};
`

Input.defaultProps = {
  theme: {
    color: {
      darkWhite: '#eee',
      text: '#222'
    },
    font: { mono: 'monospace' }
  }
}

const Adornment = styled.span`
  position: relative;
  font-size: 0.825em;
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.mono};
  &:first-child {
    margin-right: -0.5em;
  }
`

Adornment.defaultProps = {
  theme: {
    font: { mono: 'monospace' },
    color: { text: '#222' }
  }
}

const Label = styled.label`
  position: relative;
  display: block;
  font-size: 0.75em;
`

const Error = styled.span`
  position: relative;
  display: block;
  margin-top: -0.75em;
  padding: 0 0.4em;
  font-size: 0.75em;
  color: ${props => props.theme.color.red};
`


const InputWrap = ({ pre, post, ...props }) => {
  const { label, error, value } = props
  let input = (<Input {...props} />)
  if (pre || post) {
    input = (<span>
      {pre ? <Adornment>{pre}</Adornment> : null}
      <Input {...props} />
      {post ? <Adornment>{post}</Adornment> : null}
    </span>)
  }
  return (
    <div>
      {label ? <Label>{label}</Label> : null}
      {input}
      {error && value ? <Error>{error}</Error> : null}
    </div>
  )
}

InputWrap.propTypes = {
  pre: PropTypes.node,
  post: PropTypes.node,
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string
}

InputWrap.defaultProps = {
  pre: null,
  post: null,
  label: null,
  error: null,
  value: ''
}

export default InputWrap
