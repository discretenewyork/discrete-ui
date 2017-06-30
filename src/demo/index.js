import React from 'react'
import { render } from 'react-dom'
import { Container, Input, Search, Button } from 'components'
import Section from './Section'
import '../theme/base.css';

const MOUNT_NODE = document.querySelector('#root')

const DemoView = () => (
  <div>
    <Container style={{marginTop: 64}}>

          <Section
            title='Input'
            description='A simple multi-use input component'>
            <Input placeholder='Placeholder'/>
          </Section>

          <Section
            title='Search'
            description='A search component. Contains an Input component.'
            notes={`
              #TODO: decorate the component with an icon or something
            `}>
            <Search />
          </Section>

          <Section
            title='Button'
            description='A multi-purpose button component'>
            <Button>Simple</Button>
            <Button primary>Primary</Button>
          </Section>

    </Container>
  </div>
)

render(<DemoView />, MOUNT_NODE)