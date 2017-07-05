import React from 'react'
import { render } from 'react-dom'
import { Container, Input, Search, Button, Icon } from 'components'
import Section from './Section'
import Swatch from './Swatch'
import '../theme/base.css';

const MOUNT_NODE = document.querySelector('#root')

const labelStyle = {
  display: 'inline-block',
  fontSize: 13,
  minWidth: 50,
  marginRight: 4,
  color: '#7d7d7d'
}

const DemoView = () => (
  <div>
    <Container style={{marginTop: 64}}>

          <Section
            title='Colors'
            description='A pallette of re-usable colors'>
            <Swatch color='blue' />
            <Swatch color='white' />
            <Swatch color='darkWhite' />
            <Swatch color='black' />
            <Swatch color='textColor' />
          </Section>

          <Section
            title='Icons'
            description='An Icon component for the black tie icon set'>
            <p>
              <label style={labelStyle}>Light:</label>
              <Icon weight='light' name='check' width={16} height={16}/>
              <Icon weight='light' name='times' width={16} height={16}/>
              <Icon weight='light' name='arrow-right' width={16} height={16}/>
              <Icon weight='light' name='trash' width={16} height={16}/>
            </p>
            <p>
              <label style={labelStyle}>Regular:</label>
              <Icon weight='regular' name='check' width={16} height={16}/>
              <Icon weight='regular' name='times' width={16} height={16}/>
              <Icon weight='regular' name='arrow-right' width={16} height={16}/>
              <Icon weight='regular' name='trash' width={16} height={16}/>
            </p>
            <p>
              <label style={labelStyle}>Bold:</label>
              <Icon weight='bold' name='check' width={16} height={16}/>
              <Icon weight='bold' name='times' width={16} height={16}/>
              <Icon weight='bold' name='arrow-right' width={16} height={16}/>
              <Icon weight='bold' name='trash' width={16} height={16}/>
            </p>
            <p>
              <label style={labelStyle}>Solid:</label>
              <Icon weight='solid' name='check' width={16} height={16}/>
              <Icon weight='solid' name='times' width={16} height={16}/>
              <Icon weight='solid' name='arrow-right' width={16} height={16}/>
              <Icon weight='solid' name='trash' width={16} height={16}/>
            </p>
          </Section>

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
