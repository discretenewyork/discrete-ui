import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SidebarWrap = styled.div`
  flex: 0 1 auto;
  width: 16em;
  padding: 1.25em;
  padding-left: 1.5em;
  border-right: 1px solid ${({ theme }) => theme.color.border};
  > div {
    flex: 1 1 100%;
  }
`

SidebarWrap.propTypes = {
  theme: PropTypes.shape({
    color: PropTypes.shape({
      border: PropTypes.string
    })
  })
}

SidebarWrap.defaultProps = {
  theme: {
    color: { border: '#222' }
  }
}

const Sidebar = ({ children }) => (
  <SidebarWrap>
    <div>{children}</div>
  </SidebarWrap>
)

Sidebar.propTypes = {
  children: PropTypes.node.isRequired
}

export default Sidebar
