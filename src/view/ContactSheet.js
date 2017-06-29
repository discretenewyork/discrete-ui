import React, { Component } from 'react';
import styles from './ContactSheet.css'
import Section from './Section'
import { Input, Search } from 'components'

export default class ContactSheet extends Component {
  render() {
    return (
      <div className={styles.contactSheet}>
        <div className={styles.content}>
          <Section
            title={'Input'}
            description={'A simple multi-use input component'}>
            <Input placeholder='Placeholder'/>
          </Section>

          <Section
            title={'Search'}
            description={'A search component. Contains an Input component.'}
            notes={`
              #TODO: decorate the component with an icon or something
            `}>
            <Search />
          </Section>
        </div>
      </div>
    )
  }
}
