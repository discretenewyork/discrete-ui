import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Menu = styled.div`
  display: flex;
  flex-direction: ${props => props.horizontal ? 'row' : 'column'};
  text-align: center;
  > * {
    flex-direction: ${props => props.horizontal ? 'column' : 'row'}
    text-align: inherit;
  }
`

Menu.Item = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex: 0 0 auto;
  user-select: none;
  margin: 0 0.5em;
`

Menu.propTypes = {
  horizontal: PropTypes.bool
}

Menu.defaultProps = {
  horizontal: false
}

export default Menu
