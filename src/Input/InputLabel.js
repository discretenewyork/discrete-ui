import styled from 'styled-components'
import PropTypes from 'prop-types'

const Label = styled.label`
  margin-top: 0.5em;
  font-size: 0.85em;
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
