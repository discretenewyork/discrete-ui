import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from './Icon'

const LoaderWrap = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.theme.color.gray};
`

LoaderWrap.propTypes = {
  width: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  height: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  theme: PropTypes.shape({
    color: PropTypes.shape({
      gray: PropTypes.string
    })
  })
}

LoaderWrap.defaultProps = {
  width: '100%',
  height: '100%',
  theme: {
    color: { gray: 'gray' }
  }
}

const Loader = props => (
  <LoaderWrap {...props}>
    <Icon name='refresh' spin />
  </LoaderWrap>
)

export default Loader
