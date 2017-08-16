import React from 'react'
import { render } from 'react-dom'
import styled { ThemeProvider, injectGlobal } from 'styled-components'
import theme, { globalStyle } from './theme'
import Section from './Section'
import { ColorSwatch, IconSwatch } from './Swatches'
import {
  Button,
  /*
  Container,
  Dropdown,
  Icon,
  Input,
  Search,
  Tag
  */
} from '../lib/components'

injectGlobal`${globalStyle}`

const Document = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 4em 2em;
  height: 100vh;
`

const DemoView = () => (
  <ThemeProvider theme={theme}>
    <Document>
      <Container>

        <Section
          title='Button'
          description='A multi-purpose button component'>
          <Button>Default</Button>
          <Button secondary>Secondary</Button>
          <Button danger>Danger</Button>
        </Section>

        {/*



        <Section
          title='Colors'
          description='A pallette of re-usable colors'>
          <ColorSwatch color='blue' />
          <ColorSwatch color='white' />
          <ColorSwatch color='darkWhite' />
          <ColorSwatch color='black' />
          <ColorSwatch color='textColor' />
        </Section>

        <Section
          title='Icons'
          description={`An Icon component for the black tie icon set.
                  Uses the "<i>" tag under the hood.`}>
          <IconSwatch />
        </Section>

        <Section
          title='Input'
          description='A simple multi-use input component'>
          <Input placeholder='Placeholder' />
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
          title='Tag'
          description='The tag component represents user-defined tags (text labels)'>
          <Tag name='Default' />
          <Tag name='Blue' color='blue' />
          <Tag name='Red' color='red' />
          <Tag name='Black' color='black' />
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
            ]} />
        </Section>





          */}

      </Container>
    </Document>
  </ThemeProvider>
)

const MOUNT_NODE = document.querySelector('#root')

render(<DemoView />, MOUNT_NODE)
