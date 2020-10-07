import './index.css'
import React from 'react'
import {render} from 'react-dom'
import {createApp} from './app'

const app = createApp()

render(
  app.component,
  document.getElementById('main')
)
