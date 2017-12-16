import styled from 'styled-components'
import PropTypes from 'prop-types'

const Label = styled.label`
  display: block;
  margin: 1.5em 0 0.2em;
  font-size: 0.8em;
  text-transform: uppercase;
  font-weight: bold;
  &::after {
    content: ${props => props.required ? '"*"' : ''};
    color: ${props => props.theme.color.red};
    margin-left: 2px;
  }
`

Label.propTypes = {
  required: PropTypes.bool,
  theme: PropTypes.shape({
    color: PropTypes.shape({
      red: PropTypes.string
    })
  })
}

Label.defaultProps = {
  required: false,
  theme: {
    color: {
      red: 'red'
    }
  }
}
 export default Label
