import PropTypes from 'prop-types'
import styled from 'styled-components'

const Menu = styled.div`
  display: flex;
  flex-direction: ${props => {
    if (props.horizontal) return 'row'
    return 'column'
  }};
  text-align: center;
  > * {
    flex-direction: ${props => {
    if (props.horizontal) return 'column'
    return 'row'
  }};
    text-align: inherit;
  }
`

Menu.Item = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex: 0 0 auto;
  user-select: none;
  margin: 0 0.5em;
`

Menu.propTypes = {
  horizontal: PropTypes.bool
}

Menu.defaultProps = {
  horizontal: false
}

export default Menu
