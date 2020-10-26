import './style.css'
import {render} from 'react-dom'
import {createApp} from './app'

const app = createApp()

render(
  app.component,
  document.getElementById('Main')
)
