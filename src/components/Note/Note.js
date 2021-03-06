import css from './style.css'
import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {provideApi} from 'api'
import Switch from './Switch'
import Button from './Button'
import NoteInput from './NoteInput'

const Note = ({
  note,
  onFocus, onChange, onToggle, onRemove,
  onNoteEvent,
}) => {

  const ref = useRef()

  const handleNoteEvent = (event) => onNoteEvent(note.id, ref.current, event)

  const handleKeyDown = (event) => {
    if (event.altKey && event.key === 'x') {
      event.preventDefault()
      onToggle()
    }
  }

  const className = classNames(css.Note, {
    [css.isHeaderNote]: note.text[0] === '#',
  })

  return (
    <div
      ref={ref}
      className={className}
      onKeyDown={handleKeyDown}>
      <Switch
        isOn={note.isDone}
        onClick={onToggle} />
      <div
        className={css.TextDiv}
        onClick={() => ref.current.querySelector('input').focus()}>
        <NoteInput
          className={classNames(css.Input, {[css.isDone]: note.isDone})}
          value={note.text}
          onFocus={onFocus}
          onChange={event => onChange(note.id, event.target.value)}
          onNoteEvent={handleNoteEvent} />
      </div>
      <Button className={css.RemoveButton} onClick={() => onRemove(note.id)}>
        <span className={css.RemoveIcon}>🗑</span>
      </Button>
    </div>
  )

}

Note.propTypes = {
  note: PropTypes.object.isRequired,
  onFocus: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onNoteEvent: PropTypes.func.isRequired,
}

const mapDispatch = (dispatch, {api, note}) => ({
  onChange (id, text) {
    api.notes.update(id, {text})
  },
  onToggle () {
    api.notes.update(note.id, {isDone: !note.isDone})
  },
})

export default provideApi(
  connect(null, mapDispatch)(Note)
)
