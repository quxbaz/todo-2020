import './style.css'
import {render} from 'react-dom'
import {createApp} from './app'

render(
  createApp(),
  document.getElementById('Main')
)
