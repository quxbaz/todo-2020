import css from './style.css'
import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {createApi} from '/api'
import Switch from './Switch'
import Button from './Button'
import NoteInput from './NoteInput'

const Note = ({
  note, isLastCreated,

  inputMap,

  onChange, onToggle, onRemove, onMergeWithPrev,

  // onKeyDown, onEnterAtEnd, onEnterAtStart, onEnterAtPos,

}) => {

  // const ref = useRef()

  // useEffect(() => {
  //   if (isLastCreated && note.createdBy === 'NOTE_ITEM' && !note.wasCreatedAtStartPos)
  //     ref.current.querySelector('input').focus()
  // }, [])

  // function withPrevInput (fn, alt) {
  //   const prev = ref.current.previousSibling
  //   if (prev)
  //     fn(prev.querySelector('input'), prev)
  //   else
  //     if (alt) alt()
  // }

  // function withNextInput (fn) {
  //   const next = ref.current.nextSibling
  //   if (next)
  //     fn(next.querySelector('input'), next)
  // }

  inputMap = {
    ...inputMap,
    onChange: (event) => onChange(note.id, event.target.value),
  }

  return (
    <div className={'Note ' + css.Note}>
      <Switch
        isOn={note.isDone}
        onClick={() => onToggle(note.id, !note.isDone)} />
      <div style={{width: '100%'}}>
        <NoteInput
          className={classNames(css.Input, {[css.isDone]: note.isDone})}
          value={note.text}
          {...inputMap} />
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
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,

  // onMergeWithPrev: PropTypes.func.isRequired,

  // onChange: PropTypes.func.isRequired,
  // onKeyDown: PropTypes.func.isRequired,
  // onEnterAtEnd: PropTypes.func.isRequired,
  // onEnterAtStart: PropTypes.func.isRequired,
  // onEnterAtPos: PropTypes.func.isRequired,

}

const mapStateToProps = (state, {note}) => ({
  isLastCreated: note.id === state.notesMeta.lastCreated,
})

const mapDispatchToProps = (dispatch) => {
  const api = createApi(dispatch)
  return {
    onToggle (id, isDone) {
      api.notes.toggle(id, isDone)
    },
    onChange (id, text) {
      api.notes.update(id, {text})
    },
    onRemove (id) {
      api.notes.remove(id)
    },
    onMergeWithPrev (id, text) {
      console.log('MERGE')
      api.notes.merge(id)
    },
    onEnterAtStart (id) {
      api.notes.create({
        text: '',
        insertBefore: id,
        createdBy: 'NOTE_ITEM',
        wasCreatedAtStartPos: true,
      })
    },
    onEnterAtPos (id, text, pos) {
      api.notes.update(id, {text: text.slice(0, pos)})
      api.notes.create({
        text: text.slice(pos),
        insertAfter: id,
        createdBy: 'NOTE_ITEM',
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Note)
