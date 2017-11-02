import PropTypes from 'prop-types'
import styled from 'styled-components'
import InputWrap from './Input/InputWrap.js'

const Form = styled.form`
  ${InputWrap} {
    margin: 0.5em 0;
  }
`

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

Form.Group = styled.div`
  display: flex;
  flex-direction: row;
  & > * {
    flex: 0 0 auto;
    margin-right: 0.75em;
  }
`

Form.Error = styled.div`
  display: block;
  font-size: 0.8em;
  padding: 0.5em;
  color: ${props => props.theme.color.red};
  font-family: ${props => props.theme.font.mono};
  &:before {
    content: "[!]";
    margin-right: 0.5em;
  }
`

Form.Error.defaultProps = {
  theme: {
    color: { red: 'red' },
    font: { mono: 'monospace' }
  }
}

export default Form
