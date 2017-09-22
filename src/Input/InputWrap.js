import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputWrap = styled.div`
  position: relative;
  margin: 0.5em 0;
  input {
    padding: 0.125em;
    outline: none;
    border: none;
    border-radius: 0;
    font-size: 0.875em;
    border-bottom: 1px solid ${props => props.theme.color.text};
    color: ${props => props.theme.color.text};
    font-family: ${props => props.theme.font.mono};
  }
  label {
    display: block;
    font-size: 0.75em;
  }
`

InputWrap.propTypes = {
  theme: PropTypes.shape({
    color: PropTypes.shape({
      text: PropTypes.string
    }),
    font: PropTypes.shape({
      mono: PropTypes.string
    })
  })
}

InputWrap.defaultProps = {
  theme: {
    color: { text: '#222' },
    font: { mono: 'monospace' }
  }
}

export default InputWrap
