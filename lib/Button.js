import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken, lighten } from 'polished'

const buttonBgColor = ({ primary, secondary, danger, disabled, theme }) => {
  if (primary) return theme.color.blue
  if (secondary) return theme.color.white
  if (danger) return theme.color.red
  if (disabled) return theme.color.gray
  return theme.color.text
}

const buttonFgColor = ({ secondary, theme }) => {
  if (secondary) return theme.color.text
  return theme.color.white
}

const buttonFgHoverColor = props => {
  const { primary, danger, secondary } = props
  if (secondary) return lighten(0.1, buttonFgColor(props))
  return buttonFgColor(props)
}

const buttonBgHoverColor = props => {
  const { primary, danger } = props
  if (primary || danger) return darken(0.2, buttonBgColor(props))
  return buttonBgColor(props)
}

const buttonFgActiveColor = props => buttonFgColor(props)

const buttonBgActiveColor = props => buttonBgColor(props)

const buttonFontSize = ({ size }) => {
  switch (size) {
    case 'large': return '0.9em'
    case 'small': return '0.618em'
    default: return '0.825em'
  }
}

const buttonPadding = ({ size }) => {
  switch (size) {
    case 'large':
      return '0.5em 2em'
    case 'small':
      return '0.25em 1em'
    default:
      return '0.382em 1.5em'
  }
}

const buttonWidth = ({ size }) => {
  switch (size) {
    case 'large':
      return '10em'
    case 'small':
      return '0'
    default:
      return '8em'
  }
}

const Button = styled.button`
  outline: none;
  background: ${buttonBgColor};
  border: none;
  padding: ${buttonPadding};
  margin: 0 0.5em;
  cursor: ${({ disabled }) => {
    if (disabled) return 'not-allowed'
    return 'pointer'
  }};
  border-radius: 10em;
  font-weight: 400;
  letter-spacing: 0.25px;
  color: ${buttonFgColor};
  font-size: ${buttonFontSize};
  min-width: ${buttonWidth};
  svg {
    fill: ${buttonFgColor};
  }
  &:hover {
    color: ${buttonFgHoverColor};
    background: ${buttonBgHoverColor};
  }
  &:active {
    color: ${buttonFgActiveColor};
    background: ${buttonBgActiveColor};
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
      white: 'white',
      inactive: 'gray',
      border: 'black',
      blue: 'blue',
      red: 'red',
      gray: 'gray'
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
  color: ${buttonFgColor};
  fill: ${buttonFgColor};
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
      border: 'black',
      blue: 'blue',
      red: 'red'
    }
  }
}

const ButtonWrap = ({ pre, post, children, onClick, ...props }) => {
  if (pre || post) return (
    <Button {...props}>
      {pre ?
        <Adornment
          left
          {...props}>
          {pre}
        </Adornment> : null}
      {children}
      {post ?
        <Adornment
          right
          {...props}>
          {post}
        </Adornment> : null}
    </Button>
  )
  return <Button onClick={onClick} {...props}>{children}</Button>
}

ButtonWrap.propTypes = {
  children: PropTypes.node.isRequired,
  post: PropTypes.node,
  pre: PropTypes.node,
  size: PropTypes.string,
  onClick: PropTypes.func
}

ButtonWrap.defaultProps = {
  pre: null,
  post: null,
  size: null,
  onClick: null
}

export default ButtonWrap
