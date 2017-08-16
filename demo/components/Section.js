import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SectionWrap = styled.section`
  min-height: 128px;
  display: flex;
  border-top: 1px solid #f0f0f0;
  &:first-child {
    border-top: none;
  }
  padding: 1.5em 0.5em;
`

const InfoWrap = styled.div`
  width: 256px;
  padding-right: 16px;
  flex: 0 0 auto;
  h2 {
    font-size: 18px;
    margin: 0 0 8px;
  }
  p {
    font-size: 14px;
    margin: 0 0 8px;
  }
  aside {
    font-family: Menlo, monospace;
    font-size: 11px;
  }
`

const ComponentWrap = styled.div`
  flex: 0 1 auto;
  width: 100%;
`

const Section = ({ title, description, notes, children }) => (
  <SectionWrap>
    <InfoWrap>
      <h2>{title}</h2>
      <p>{description}</p>
      <aside>{notes}</aside>
    </InfoWrap>
    <ComponentWrap>
      {children}
    </ComponentWrap>
  </SectionWrap>
)

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  notes: PropTypes.string
}

Section.defaultProps = {
  notes: null
}

export default Section
