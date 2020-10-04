import React from 'react'
import {render} from 'react-dom'
import {createApp} from './App'

const app = createApp()

render(
  app.component,
  document.getElementById('main')
)
