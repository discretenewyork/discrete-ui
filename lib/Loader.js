import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from './Icon'

const LoaderWrap = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  align-items: center;
  justify-content: center;
`

LoaderWrap.propTypes = {
  width: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  height: PropTypes.oneOfType(PropTypes.number, PropTypes.string)
}

LoaderWrap.defaultProps = {
  width: '100%',
  height: '100%'
}

const Loader = props => (
  <LoaderWrap {...props}>
    <Icon name='sync' spin />
  </LoaderWrap>
)

export default Loader
