import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import icons from './svg'

const IconWrap = styled.i`
  display: inline-flex;
  align-items: center;
`

const Svg = styled.svg`
  width: ${props => props.size};
  height: ${props => props.size};
  ${props => (props.lowered ? `
    position: relative;
    top: 0.1875em;
  ` : '')}
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

const Icon = ({ name, brand, size, weight, spin, lowered }) => {
  const icon = brand ? icons[name] : icons[`${name}-${weight}`]
  const Graphic = spin ? SpinningSvg : Svg

  return (
    <IconWrap>
      <Graphic
        viewBox={icon ? icon.viewBox : null}
        lowered={lowered}
        size={size}>
        { icon ? <use xlinkHref={`./${icon.url}`} /> : null }
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
  spin: PropTypes.bool,
  lowered: PropTypes.bool
}

Icon.defaultProps = {
  className: '',
  weight: 'regular',
  size: '1em',
  brand: false,
  spin: false,
  lowered: false
}

export default Icon
