import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'

const buttonBgColor = ({ disabled, theme }) => {
  if (disabled) return theme.color.gray
  return theme.color.white
}

const buttonHoverColor = (props) => {
  if (props.disabled) return lighten(0.04, buttonBgColor(props))
  const { primary, secondary, danger, success, theme } = props
  let amount = 0.8
  if (primary || secondary || success) amount = 0.44
  else if (danger) amount = 0.36
  return lighten(amount, buttonFgColor(props))
}

const buttonFgColor = ({
  primary, secondary, danger, success, disabled, theme
}) => {
  if (disabled) return theme.color.white
  if (primary) return theme.color.blue
  if (secondary) return theme.color.darkGray
  if (success) return theme.color.green
  if (danger) return theme.color.red
  return theme.color.text
}

const buttonFontSize = ({ size }) => {
  switch (size) {
    case 'large': return '1em'
    case 'small': return '0.75em'
    default: return '0.825em'
  }
}

const buttonBorderColor = (props) => {
  if (props.disabled)
    return buttonBgColor(props)
  return buttonFgColor(props)
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
  border: none;
  margin: 0.1875em 0.5em;
  border-radius: 2px;
  font-weight: 400;
  letter-spacing: 0.25px;
  cursor: ${({ disabled }) => {
    if (disabled) return 'not-allowed'
    return 'pointer'
  }};

  font-size: ${buttonFontSize};
  padding: ${buttonPadding};
  min-width: ${buttonWidth};

  color: ${buttonFgColor};
  background: ${buttonBgColor};
  border: 1px solid ${buttonBorderColor};
  svg {
    fill: ${buttonFgColor};
  }

  &:hover {
    background: ${buttonHoverColor};
  }

  &:active {
    color: ${buttonFgColor};
    background: ${buttonBgColor};
    svg {
      fill: ${buttonFgColor};
    }
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
