import React from 'react'
import { render } from 'react-dom'
import './view.css';
import ContactSheet from './ContactSheet'

const mountNode = document.querySelector('#root')
render(<ContactSheet />, mountNode)
