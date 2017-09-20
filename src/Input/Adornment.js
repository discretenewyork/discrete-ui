import PropTypes from 'prop-types'
import styled from 'styled-components'

const Adornment = styled.span`
  position: relative;
  font-size: 0.825em;
  color: ${props => props.theme.color.text};
  font-family: ${props => props.theme.font.mono};
  &:first-child {
    margin-right: -0.5em;
  }
  &:last-child {
    margin-left: -0.5em;
  }
`

Adornment.propTypes = {
  theme: PropTypes.shape({
    color: PropTypes.shape({
      text: PropTypes.string
    }),
    font: PropTypes.shape({
      mono: PropTypes.string
    })
  })
}

Adornment.defaultProps = {
  theme: {
    color: { text: '#222' },
    font: { mono: 'monospace' }
  }
}

export default Adornment
