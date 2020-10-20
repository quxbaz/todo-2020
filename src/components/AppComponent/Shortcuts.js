import css from './style.css'
import React from 'react'
import {createPortal} from 'react-dom'
// import PropTypes from 'prop-types'

const Shortcuts = () => {
  return createPortal(
    <div className={css.Shortcuts}>
      Modaljalsdjf
    </div>,
    document.getElementById('Modals')
  )
}

Shortcuts.propTypes = {}

export default Shortcuts
