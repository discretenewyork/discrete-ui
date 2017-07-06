import React from 'react'
import { render } from 'react-dom'
import { Container, Input, Search, Button, Icon, Tag, Dropdown } from 'components'
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
    <Container style={{margin: '64px auto'}}>

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
            description={`An Icon component for the black tie icon set.
                Uses the "<i>" tag under the hood.`}>
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

          <Section
            title='Tag'
            description='The tag component represents user-defined tags (text labels)'>
            <Tag name='Default'/>
            <Tag name='Blue' color='blue'/>
            <Tag name='Red' color='red'/>
            <Tag name='Black' color='black'/>
          </Section>

          <Section
            title='Dropdown'
            description='A minmal dropdown component'
            notes={`Figure out how to (a) style our own icon in '::after' or whatever,
                and (b) how to create a placeholder title?`}>
            <Dropdown
              options={[
                { value: 'a', name: 'a' },
                { value: 'b', name: 'b' }
              ]}/>
          </Section>

    </Container>
  </div>
)

render(<DemoView />, MOUNT_NODE)
