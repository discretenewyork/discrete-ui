import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import icons from './svg'

const IconWrap = styled.i`
  display: inline-flex;
`

const Svg = styled.svg`
  width: ${props => props.size};
  height: ${props => props.size};
`

Svg.defaultProps = {
  size: '1em'
}

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

const SpinningSvg = styled(Svg)`
  animation: ${spinAnimation} 1s infinite linear;
`

const Icon = ({ name, brand, size, weight, spin }) => {
  const icon = brand ? icons[name] : icons[`${name}-${weight}`]
  const Graphic = spin ? SpinningSvg : Svg

  return (
    <IconWrap>
      <Graphic size={size}>
        { icon ? <use xlinkHref={`#${icon.id}`} /> : null }
      </Graphic>
    </IconWrap>
  )
}

Icon.propTypes = {
  brand: PropTypes.bool,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  weight: PropTypes.string,
  spin: PropTypes.bool
}

Icon.defaultProps = {
  className: '',
  weight: 'regular',
  size: '1em',
  brand: false,
  spin: false
}

export default Icon
