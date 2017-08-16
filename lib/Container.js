import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: block;
  margin: 0 auto;
  max-width: ${({ text, fluid }) => {
    if (text) return '600px'
    if (fluid) return '100%'
    return '800px'
  }};
  text-align: ${props => props.textAlign};
`

Container.defaultProps = {
  fluid: false,
  text: false,
  textAlign: 'left'
}

export default Container
