import PropTypes from 'prop-types'
import styled from 'styled-components'

const Form = styled.form``

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

Form.Group = styled.div`
  display: flex;
  flex-direction: row;
  & > * {
    flex: 0 0 auto;
  }
`

export default Form
