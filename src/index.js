import React from 'react'
import { render } from 'react-dom'
import App from './App'

const app = new App()

render(
  app.reactComponent,
  document.getElementById('main')
)
