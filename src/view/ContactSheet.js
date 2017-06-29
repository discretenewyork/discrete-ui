import React, { Component } from 'react';
import styles from './ContactSheet.css'
import Section from './Section'
import { Input } from 'components'

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
        </div>
      </div>
    )
  }
}
