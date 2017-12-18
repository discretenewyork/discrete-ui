import PropTypes from 'prop-types'
import styled from 'styled-components'

const inputFontSize = 0.8

const InputWrap = styled.span`
  display: flex;
  margin-top: ${props => props.label ? 0 : '1em'};
  border: 1px solid ${props => props.theme.color.text};
  input {
    width: 100%;
    padding: 0 0.5em;
    outline: none;
    border: none;
    border-radius: 0;
    font-size: ${inputFontSize}em;
    line-height: ${inputFontSize * 3}em;
    color: ${props => props.theme.color.text};
    font-family: ${props => props.theme.font.mono};
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
