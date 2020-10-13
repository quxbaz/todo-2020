import css from './style.css'
import React, {useRef, useEffect} from 'react'
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

  const handleNoteEvent = (event) => onNoteEvent(note.id, ref.current, event)

  return (
    <div ref={ref} className={'Note ' + css.Note}>
      <Switch
        isOn={note.isDone}
        onClick={onToggle} />
      <div style={{width: '100%'}}>
        <NoteInput
          className={classNames(css.Input, {[css.isDone]: note.isDone})}
          value={note.text}
          onChange={event => onChange(note.id, event.target.value)}
          onNoteEvent={handleNoteEvent} />
      </div>
      <Button className={css.RemoveButton} onClick={() => onRemove(note.id)}>
        🗑
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
