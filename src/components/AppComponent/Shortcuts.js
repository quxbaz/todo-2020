import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {createPortal} from 'react-dom'

const Frame = ({children, onClickOutside}) => (
  <div className={css.Shortcuts} onClick={onClickOutside}>
    <div className={css.ShortcutsContent1}>
      <div
        className={css.ShortcutsContent2}
        onClick={event => event.stopPropagation()}>
        {children}
      </div>
    </div>
  </div>
)

Frame.propTypes = {
  onClickOutside: PropTypes.func.isRequired,
}

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

const Shortcuts = ({onClickOutside}) => {
  return createPortal(
    <Frame onClickOutside={onClickOutside}>
      <h2>Shortcuts</h2>
      <ul>
        <Separator>Info</Separator>
        <Item shortcut='Ctrl-h' command='View shortcuts' />
        <Separator>Navigation</Separator>
        <Item shortcut='Ctrl-/' command='Focus search box' />
        <Item shortcut='Ctrl-⇧' command='Cycle to prev list' />
        <Item shortcut='Ctrl-⇩' command='Cycle to next list' />
        <Separator>Notes</Separator>
        <div className={css.Columns2}>
          <div className={css.ColumnLeft}>
            <Item shortcut='Alt-p' command='Move to previous line' />
            <Item shortcut='Alt-n' command='Move to next line' />
            <Item shortcut='Alt-e' command='Move to end of line' />
            <Item shortcut='Alt-e' command='Move to start of line' />
          </div>
          <div className={css.ColumnRight}>
            <Item shortcut='Alt-x' command='Check note' />
            <Item shortcut='Alt-c' command='Clear checked notes' />
          </div>
        </div>
        <Separator>Lists</Separator>
        <Item shortcut='Alt-r' command='Rename list' />
        <Item shortcut='Alt-d' command='Delete list' />
      </ul>
    </Frame>,
    document.getElementById('Modals')
  )
}

Shortcuts.propTypes = {
  onClickOutside: PropTypes.func.isRequired,
}

export default Shortcuts
