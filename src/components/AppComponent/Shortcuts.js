import css from './style.css'
import React from 'react'
import {createPortal} from 'react-dom'

const Shortcuts = () => {
  return createPortal(
    <div className={css.Shortcuts}>
      Modaljalsdjf
    </div>,
    document.getElementById('Modals')
  )
}

export default Shortcuts
