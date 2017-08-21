import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SWATCH_SIZE = '24px'

const SwatchWrap = styled.div`
  display: inline-block;
  margin: 4px 16px;
  width: ${SWATCH_SIZE};
`

const ColorBox = styled.div`
  width: ${SWATCH_SIZE};
  height: ${SWATCH_SIZE};
  border: 1px solid #ddd;
  background: ${({ color, theme }) => theme.color[color]};
`

const ColorLabel = styled.label`
  margin: 0;
  display: block;
  width: 32px;
  font-weight: 300;
  font-size: 10px;
`
const Swatch = ({ color }) => (
  <SwatchWrap>
    <ColorBox color={color} />
    <ColorLabel>{color}</ColorLabel>
  </SwatchWrap>
)

Swatch.propTypes = {
  color: PropTypes.string.isRequired
}

export default Swatch
