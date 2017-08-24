import styled from 'styled-components'

const Container = styled.div`
  display: block;
  position: relative;
  margin: 0 auto;
  border-radius: 0.25em;
  padding: 1em;
  max-width: ${({ text, mini, fluid }) => {
    if (mini) return '320px'
    if (text) return '600px'
    if (fluid) return '100%'
    return '800px'
  }};
  text-align: ${props => props.textAlign};
`

Container.defaultProps = {
  fluid: false,
  mini: false,
  text: false,
  textAlign: 'left'
}

export default Container
