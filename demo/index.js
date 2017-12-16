import React from 'react'
import { render } from 'react-dom'
import shortid from 'shortid'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import theme, { globalStyle } from './theme'
import { Section, ColorSwatch, IconSwatch } from './components'
import {
  Button,
  Dropdown,
  Form,
  Grid,
  Icon,
  Input,
  Loader,
  Menu,
  Tag
} from '../src'

// eslint-disable-next-line no-unused-expressions
injectGlobal`${globalStyle}`

const Document = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 4em 2em;
  height: 100vh;
  width: 100%;
  overflow-y: auto;
`

const DemoView = () => (
  <ThemeProvider theme={theme}>
    <Document>

      <Section
        title='Colors'
        description='The default colors of the discrete-theme'>
        {Object.keys(theme.color).map(c => (
          <ColorSwatch key={shortid.generate()} color={c} />
        ))}
      </Section>

      <Section
        title='Icons'
        description={`An Icon component for the black tie icon set.
                Uses the "<i>" tag under the hood.`}>
        <IconSwatch />
      </Section>

      <Section
        title='Button'
        description='A multi-purpose button component'>
        <Button>Default</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button danger>Danger</Button>
        <Button disabled>Disabled</Button>
        <br />
        <br />
        <Button size='large'>Large</Button>
        <Button size='small'>small</Button>
        <br />
        <br />
        <Button pre={<Icon brand name='twitter' />}>LeftAdorn</Button>
        <Button post={<Icon brand name='instagram' />}>RightAdorn</Button>
      </Section>

      <Section
        title='Input'
        description='A simple multi-use input component'>
        <p> <Input placeholder='Default' /> </p>
        <p>
          <Input
            placeholder='Search'
            pre={<Icon size='0.825em' name='search' />} />
        </p>
        <p>
          <Input
            placeholder='With Button'
            post={<Button>Go</Button>} />
        </p>
        <p>
          <Input
            label='TextInput'
            placeholder='With Label' />
        </p>
        <p>
          <Input
            label='Required TextInput'
            required
            placeholder='Required Label' />
        </p>
        <p>
          <Input
            label='Masked Input'
            placeholder='+1 (212) 555-5555'
            mask='+1 (999) 999-9999' />
        </p>
        <p>
          <Form.Group>
            <Input label='FormGroup Input 1' />
            <Input label='Grouped Input 2' />
          </Form.Group>
        </p>
      </Section>

      <Section
        title='Dropdown'
        description='A minmal dropdown component'
        notes={`Figure out how to (a) style our own icon in '::after' or whatever,
                and (b) how to create a placeholder title?`}>
        <Dropdown
          options={[
            { value: 'apple', name: 'apple' },
            { value: 'banana', name: 'banana' },
            { value: 'carrot', name: 'carrot' }
          ]} />
        <Dropdown
          title={'With Title'}
          options={[
            { value: 'apple', name: 'apple' },
            { value: 'banana', name: 'banana' },
            { value: 'carrot', name: 'carrot' }
          ]} />
        <p>
          <Form.Group>
            <Dropdown
              title='Grouped'
              options={[
                { value: 'apple', name: 'apple' },
                { value: 'banana', name: 'banana' },
                { value: 'carrot', name: 'carrot' }
              ]} />
            <Input label='with Input' />
          </Form.Group>
        </p>
      </Section>

      <Section
        title='Grid'
        description='Defaults to 3 columns, auto-expands to fit parent container'>
        <Grid>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => <span key={shortid.generate()} />)}
        </Grid>
      </Section>

      <Section
        title='Menu'
        description='Good for navigation components e.g. sidebar / navbar'>
        <strong>Vertical:</strong>
        <Menu>
          <Menu.Item><a href='#a'>one</a></Menu.Item>
          <Menu.Item><a href='#a'>two</a></Menu.Item>
          <Menu.Item><a href='#a'>three</a></Menu.Item>
          <Menu.Item><a href='#a'>four</a></Menu.Item>
          <Menu.Item><a href='#a'>five</a></Menu.Item>
        </Menu>
        <br />
        <strong>Horizontal:</strong>
        <Menu horizontal>
          <Menu.Item><a href='#a'>one</a></Menu.Item>
          <Menu.Item><a href='#a'>two</a></Menu.Item>
          <Menu.Item><a href='#a'>three</a></Menu.Item>
          <Menu.Item><a href='#a'>four</a></Menu.Item>
          <Menu.Item><a href='#a'>five</a></Menu.Item>
        </Menu>
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
        title='Loader'
        description='A loading component that can fit in various sized boxes'>
        <Loader height='128px' width='128px' />
      </Section>

    </Document>
  </ThemeProvider>
)

const MOUNT_NODE = document.querySelector('#root')

render(<DemoView />, MOUNT_NODE)
