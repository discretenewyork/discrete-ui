import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import shortid from 'shortid'
import Icon from '../../lib/Icon'

const IconLabel = styled.label`
  display: 'inline-block';
  font-size: 0.8125em;
  min-width: 50px;
  margin-right: 0.25em;
  color: ${({ theme }) => theme.color.inactive};
`

const ICON_SIZE = 16
const TEST_ICONS = ['check', 'times', 'arrow-right', 'trash']
const WEIGHTS = ['light', 'regular', 'bold', 'solid']

const IconSwatch = () => (
  <div>
    {WEIGHTS.map(weight => (
      <p key={shortid.generate()}>
        <IconLabel>
          {`${weight.slice(0,1).toUpperCase()}${weight.slice(1)}:`}
        </IconLabel>
        {TEST_ICONS.map( i =>
          <Icon
            weight={weight}
            name={i}
            key={shortid.generate()} />
        )}
      </p>
    ))}
    <IconLabel>Spin:</IconLabel>
    <Icon name='sync' spin />
  </div>
)

export default IconSwatch
