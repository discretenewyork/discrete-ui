import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Form = ({ onSubmit, children }) => (
  <form onSubmit={e => {
    e.preventDefault()
    onSubmit(e)
  }}>
    {children}
  </form>
)

Form.Group = styled.div`
  display: flex;
  flex-direction: row;
  & > * {
    flex: 0 0 auto;
  }
`

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node
}

Form.defaultProps = {
  children: <span />
}

export default styled(Form)`
  input {
    margin: 0.25em auto;
  }
`
