import styled from 'styled-components'
import PropTypes from 'prop-types'
import Label from './Input/InputLabel'

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  min-height: 6em;
  padding: 0.25em;
  margin: 1em 0.25em;
  font-size: 0.875em;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.border};
  font-family: ${({ theme }) => theme.font.mono};
`

TextArea.propTypes = {
  theme: PropTypes.shape({
    color: PropTypes.shape({
      white: PropTypes.string,
      border: PropTypes.string
    }),
    font: PropTypes.shape({
      mono: PropTypes.string
    })
  })
}

TextArea.defaultProps = {
  theme: {
    color: {
      white: 'white',
      border: 'black'
    },
    font: {
      mono: 'monospace'
    }
  }
}

export default ({ label, ...props }) => (
  <div>
    {label ? <Label>{label}</Label> : null }
    <TextArea {...props} />
  </div>
)
