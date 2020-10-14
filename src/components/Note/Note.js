import css from './style.css'
import React, {useState, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {createApi} from '/api'
import Switch from './Switch'
import Button from './Button'
import NoteInput from './NoteInput'

const Note = ({
  note, isLastCreated,
  onChange, onToggle, onRemove,
  onNoteEvent,
}) => {

  const ref = useRef()
  const [isFocused, setIsFocused] = useState(false)

  const handleNoteEvent = (event) => onNoteEvent(note.id, ref.current, event)

  return (
    <div
      ref={ref}
      className={classNames('Note', css.Note, {
        [css.isFocused]: isFocused,
      })}>
      <Switch
        isOn={note.isDone}
        onClick={onToggle} />
      <div
        className={css.TextDiv}
        onClick={() => ref.current.querySelector('input').focus()}>
        <NoteInput
          className={classNames(css.Input, {[css.isDone]: note.isDone})}
          value={note.text}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
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
  isLastCreated: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onNoteEvent: PropTypes.func.isRequired,
}

const mapStateToProps = (state, {note}) => ({
  isLastCreated: note.id === state.notesMeta.lastCreated,
})

const mapDispatchToProps = (dispatch, {note}) => {
  const api = createApi(dispatch)
  return {
    onChange (id, text) {
      api.notes.update(id, {text})
    },
    onToggle () {
      api.notes.update(note.id, {isDone: !note.isDone})
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Note)
