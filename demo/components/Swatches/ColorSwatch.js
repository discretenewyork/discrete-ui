import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SWATCH_SIZE = '16px'

const SwatchWrap = styled.div`
  display: inline-block;
  margin: 4px 8px;
  width: ${SWATCH_SIZE};
`

const ColorBox = styled.div`
  width: ${SWATCH_SIZE};
  height: ${SWATCH_SIZE};
  border: 1px solid #ddd;
  background: ${({ theme }) => theme.color[props.color]};
`

const ColorLabel = styled.label`
  margin: 0;
  display: block;
  width: ${SWATCH_SIZE};
  text-align: center;
  font-weight: 300;
  font-size: 10px;
  overflow-x: hidden;
`
const Swatch = ({ color }) => (
  <span className={styles.swatch}>
    <ColorBox color={color} />
    <ColorLabel>{color}</ColorLabel>
  </span>
)

Swatch.propTypes = {
  color: PropTypes.string.isRequired
}

Swatch.defaultProps = {
  theme: {
    colors: {}
  }
}

export default Swatch
