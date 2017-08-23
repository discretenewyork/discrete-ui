import React, { Component } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import styled from 'styled-components'

const DEFAULT_SIZE = 256
const DEFAULT_GUTTER = 1

const GridWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: ${props => props.size}px;
  width: 100%;
  margin: 0;
  &:not(:last-child) {
    margin-bottom: ${props => props.gutter}px;
  }
`
Row.defaultProps = {
  size: DEFAULT_SIZE,
  gutter: DEFAULT_GUTTER
}

const Item = styled.div`
  background: ${({ theme }) => theme.color.darkWhite};
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  margin: 0;
  &:not(:last-child) {
    margin-right: ${props => props.gutter}px;
  }
  > * {
    display: block;
    height: 100%;
    width: 100%;
  }
`

Item.defaultProps = {
  size: DEFAULT_SIZE,
  gutter: DEFAULT_GUTTER,
  theme: { color: { darkWhite: '#f7f7f7' } }
}


export default class Grid extends Component {
  static propTypes = {
    children: PropTypes.node,
    columns: PropTypes.number,
    gutterSize: PropTypes.number
  }

  static defaultProps = {
    children: [],
    className: '',
    columns: 3,
    gutterSize: DEFAULT_GUTTER
  }

  constructor() {
    super()
    this.handleResize = this.handleResize.bind(this)
    this.state = { size: DEFAULT_SIZE }
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize() {
    const { columns, gutterSize } = this.props
    const totalGutter = gutterSize * (columns - 1)
    const size = (this.grid.offsetWidth - totalGutter) / columns
    this.setState({ size })
  }

  render() {
    const { columns, gutterSize } = this.props
    const children = React.Children.toArray(this.props.children)
    const rows = []
    while (children.length > 0) {
      rows.push(children.splice(0, columns))
    }

    return (
      <GridWrap innerRef={grid => { this.grid = grid }}>
        {rows.map(items => (
          <Row
            size={this.state.size}
            gutter={gutterSize}
            key={shortid.generate()}>
            {items.map(item => (
              <Item
                size={this.state.size}
                gutter={gutterSize}
                key={shortid.generate()}>
                {item}
              </Item>
            ))}
          </Row>
        ))}
      </GridWrap>
    )
  }
}
