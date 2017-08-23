import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = styled.input`
  position:relative;
  outline: none;
  white-space: nowrap;
  width: 16em;
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
`

Adornment.defaultProps = {
  theme: {
    font: { mono: 'monospace' },
    color: { text: '#222' }
  }
}


const InputWrap = ({ pre, post, ...props }) => {
  if (pre || post) return (
    <span>
      {pre ? <Adornment>{pre}</Adornment> : null}
      <Input {...props} />
      {post ? <Adornment>{post}</Adornment> : null}
    </span>
  )
  return (
    <Input {...props} />
  )
}

InputWrap.propTypes = {
  pre: PropTypes.node,
  post: PropTypes.node
}

InputWrap.defaultProps = {
  pre: null,
  post: null
}

export default InputWrap
