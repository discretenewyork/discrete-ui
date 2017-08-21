import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken, lighten } from 'polished'

const buttonColor = ({ secondary, danger, theme }) => {
  if (secondary) return theme.color.text
  if (danger) return theme.color.red
  return theme.color.primary
}

const buttonHoverColor = ({ secondary, danger, theme }) => {
  if (secondary) return lighten(0.2, theme.color.text)
  if (danger) return darken(0.2, theme.color.red)
  return darken(0.2, theme.color.primary)
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
  cursor: pointer;
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
  danger: PropTypes.bool,
  secondary: PropTypes.bool,
  size: PropTypes.oneOf([ 'large', 'small' ])
}


Button.defaultProps = {
  danger: false,
  secondary: false,
  size: null,
  theme: {
    color: {
      text: '#000',
      primary: 'blue',
      red: 'red'
    }
  }
}

const Adornment = styled.span`
  position: relative;
  font-size: ${buttonFontSize};
  margin-left: ${props => props.left ? '0' : '0.382em'};
  margin-right: ${props => props.right ? '0' : '0.382em'};
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
      text: '#000',
      primary: 'blue',
      red: 'red'
    }
  }
}

export default ({ pre, post, children, ...props }) => {
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
