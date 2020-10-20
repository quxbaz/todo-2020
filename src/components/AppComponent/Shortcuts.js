import css from './style.css'
import React from 'react'
import {createPortal} from 'react-dom'

const Frame = ({children}) => (
  <div className={css.Shortcuts}>
    <div className={css.ShortcutsContent1}>
      <div className={css.ShortcutsContent2}>
        {children}
      </div>
    </div>
  </div>
)

const Item = ({shortcut, command}) => (
  <li>
    <div style={{width: '80px'}}>
      <span className={css.ShortcutKey}>{shortcut}</span>
    </div>
    <div style={{flex: 1, marginLeft: '10px'}}>
      <span className={css.ShortcutCommand}>{command}</span>
    </div>
  </li>
)

const Separator = ({children}) => (
  <div className={css.Separator}>
    <div className={css.Line} />
    <span>{children}</span>
    <div className={css.Line} />
  </div>
)

const Shortcuts = () => {
  return createPortal(
    <Frame>
      <h2>Shortcuts</h2>
      <ul>
        <Separator>Navigation</Separator>
        <Item shortcut='Ctrl-/' command='Focus search box' />
        <Item shortcut='Ctrl-⇧' command='Cycle to prev list' />
        <Item shortcut='Ctrl-⇩' command='Cycle to next list' />
        <Separator>Notes</Separator>
        <Item shortcut='Alt-x' command='Check note' />
        <Item shortcut='Alt-c' command='Clear checked notes' />
        <Separator>Lists</Separator>
        <Item shortcut='Alt-r' command='Rename list' />
        <Item shortcut='Alt-d' command='Delete list' />
      </ul>
    </Frame>,
    document.getElementById('Modals')
  )
}

export default Shortcuts
