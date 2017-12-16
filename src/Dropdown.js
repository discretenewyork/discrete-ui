import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Label from './Input/InputLabel'

const Select = styled.select`
  cursor: pointer;
  appearance: none;
  outline: none;
  background: none;
  border: 1px solid ${({ theme }) => theme.color.text};
  border-radius: 0;
  font-family: ${({ theme }) => theme.font.mono};
  color: ${({ theme }) => theme.color.text};
  font-size: 0.8em;
  padding: 0 calc(0.5em + 10px) 0 0.5em;
  line-height: 2.4em;
`

const Arrow = styled.span`
  pointer-events: none;
  font-size: 0.825em;
  margin-left: -15px;
`

const Dropdown = ({ title, options, ...props }) => (
  <div>
    <Label>{title}</Label>
    <Select {...props}>
      {options.map(o => (
        <option key={o.value} value={o.value}>
          {o.name}
        </option>
      ))}
    </Select>
    <Arrow>&#x25BE;</Arrow>
  </div>
)

Dropdown.propTypes = {
  title: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired
}

Dropdown.defaultProps = {
  title: ''
}

export default Dropdown
