import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { readableColor, darken } from 'polished'
import Icon from './Icon'

const tagFgColor = props => {
  const { theme, color } = props
  const result = readableColor(darken(0.16, theme.color[color]))
  return (result === '#000') ?
    theme.color.text : theme.color.white
}

const tagBgColor = props =>
  props.theme.color[props.color]

const TagBody = styled.div`
  display: inline-block;
  border-radius: 2px;
  padding: 0.125em 0.5em;
  font-size: 0.825em;
  line-height: 1em;
  cursor: pointer;
  margin: 0 0.25em;
  background: ${tagBgColor};
  color: ${tagFgColor};
  border: 1px solid ${tagFgColor};
  i {
    position: relative;
    top: -0.08em;
    margin-left: 0.382em;
  }
  svg {
    fill: ${tagFgColor};
  }
`

TagBody.propTypes = {
  color: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    color: PropTypes.shape({
      white: PropTypes.string
    })
  })
}

TagBody.defaultProps = {
  color: 'white',
  theme: {
    color: { white: '#fff' }
  }
}

const Tag = ({ name, onClose, ...props }) => (
  <TagBody {...props}>
    {name}
    <Icon name='times' size='0.5em' onClick={e => {
      e.stopPropagation()
      onClose(e)
    }} />
  </TagBody>
)

Tag.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func
}

Tag.defaultProps = {
  color: 'white',
  onClose: () => {}
}

export default Tag
