import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken, lighten } from 'polished'

const buttonColor = ({ primary, secondary, danger, disabled, theme }) => {
  if (primary) return theme.color.blue
  if (secondary) return theme.color.inactive
  if (danger) return theme.color.red
  if (disabled) return theme.color.border
  return theme.color.text
}

const buttonHoverColor = ({ primary, secondary, danger, disabled, theme }) => {
  if (primary) return darken(0.2, theme.color.blue)
  if (secondary) return darken(0.2, theme.color.inactive)
  if (danger) return darken(0.2, theme.color.red)
  if (disabled) return theme.color.border
  return lighten(0.2, theme.color.text)
}

const buttonFontSize = ({ size }) => {
  switch (size) {
    case 'large': return '1em'
    case 'small': return '0.618em'
    default: return '0.825em'
  }
}

const Button = styled.button`
  background: none;
  border: 1px solid ${buttonColor};
  outline: none;
  cursor: ${({ disabled }) => {
    if (disabled) return 'not-allowed'
    return 'pointer'
  }};
  border-radius: 4px;
  color: ${buttonColor};
  font-weight: 600;
  margin: 0 0.5em;
  padding: ${({ size }) => {
    switch (size) {
      case 'large':
        return '0.75em 1.5em'
      case 'small':
        return '0.382em 0.618em'
      default:
        return '0.5em 1em'
    }
  }};
  font-size: ${buttonFontSize};

  &:hover {
    border-color: ${buttonHoverColor};
    color: ${buttonHoverColor};
    > * {
      color: ${buttonHoverColor};
      fill: ${buttonHoverColor}
    }
  }

  &:active {
    background: ${buttonColor};
  }
`

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  danger: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'small'])
}


Button.defaultProps = {
  primary: false,
  secondary: false,
  danger: false,
  size: null,
  theme: {
    color: {
      text: 'black',
      inactive: 'gray',
      border: '#eee',
      blue: 'blue',
      red: 'red'
    }
  }
}

const Adornment = styled.span`
  position: relative;
  font-size: ${buttonFontSize};
  margin-left: ${props => {
    if (props.left) return '0'
    return '0.382em'
  }};
  margin-right: ${props => {
    if (props.right) return '0'
    return '0.382em'
  }};
  color: ${buttonColor};
  fill: ${buttonColor};
`

Adornment.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large'])
}

Adornment.defaultProps = {
  left: false,
  right: false,
  size: null,
  theme: {
    color: {
      text: 'black',
      inactive: 'gray',
      border: '#eee',
      blue: 'blue',
      red: 'red'
    }
  }
}

const ButtonWrap = ({ pre, post, children, ...props }) => {
  if (pre || post) return (
    <Button {...props}>
      {pre ?
        <Adornment
          left
          size={props.size}>
          {pre}
        </Adornment> : null}
      {children}
      {post ?
        <Adornment
          right
          size={props.size}>
          {post}
        </Adornment> : null}
    </Button>
  )
  return <Button {...props}>{children}</Button>
}

ButtonWrap.propTypes = {
  children: PropTypes.node.isRequired,
  post: PropTypes.node,
  pre: PropTypes.node,
  size: PropTypes.string
}

ButtonWrap.defaultProps = {
  pre: null,
  post: null,
  size: 'default'
}

export default ButtonWrap
