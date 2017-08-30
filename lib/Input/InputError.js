import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputError = styled.span`
  position: relative;
  display: block;
  margin-bottom: -0.875em;
  font-size: 0.75em;
  color: ${props => props.theme.color.red};
`

InputError.propTypes = {
  theme: PropTypes.shape({
    color: PropTypes.shape({
      red: PropTypes.string
    })
  })
}

InputError.defaultProps = {
  theme: {
    color: { red: 'red' }
  }
}

export default InputError
