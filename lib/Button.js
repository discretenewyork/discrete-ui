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
  font-size: ${({ size }) => {
    switch (size) {
      case 'large': return 1
      case 'small': return 0.618
      default: return 0.825
    }
  }}em;

  &:hover {
    border-color: ${buttonHoverColor};
  	color: ${buttonHoverColor};
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

export default Button
