import css from './style.css'
import NoteCss from 'components/Note/style.css'
import React, {useReducer, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {splitAt, getState} from 'qux'
import {WithApi} from 'api'
import Note, {NOTE_EVENTS} from 'components/Note'
import handleNoteEvent from './handleNoteEvent'
import OptionsBar from './OptionsBar'
import Empty from './Empty'

const reducer = (state, action) => {
  const {id, index} = action.payload
  switch (action.type) {
    case 'SET_INDEX':
      return {...state, [id]: index}
    default:
      return state
  }
}

const List = (props) => {

  const {list, notes, onRemove} = props

  const ref = useRef()
  const [state, dispatch] = useReducer(reducer, {})

  useEffect(() => {
    if (state[list.id] == null) {
      dispatch({
        type: 'SET_INDEX',
        payload: {id: list.id, index: 0},
      })
    }
    const input = ref.current
      .querySelectorAll(`.${NoteCss.Note} input`)[state[list.id]]
    if (input)
      input.focus()
  }, [list.id])

  const _handleNoteEvent = (noteId, noteDom, event) => {
    handleNoteEvent(noteId, noteDom, event, {
      [NOTE_EVENTS.ORDER_UP]: props.onOrderUp,
      [NOTE_EVENTS.ORDER_DOWN]: props.onOrderDown,
      [NOTE_EVENTS.ENTER_AT_START]: props.onEnterAtStart,
      [NOTE_EVENTS.ENTER_AT_END]: props.onEnterAtEnd,
      [NOTE_EVENTS.ENTER_AT_POS]: props.onEnterAtPos,
      [NOTE_EVENTS.BACKSPACE_AT_START_OF_EMPTY_LINE]: props.onBackspaceAtStartOfEmptyLine,
      [NOTE_EVENTS.BACKSPACE_AT_START_OF_NON_EMPTY_LINE]: props.onBackspaceAtStartOfNonEmptyLine,
      [NOTE_EVENTS.TRASH_NOTE]: props.onTrashNote,
    })
  }

  return (
    <div ref={ref} className={css.List}>
      <OptionsBar list={list} />
      <header>
        <h2>{list.title}</h2>
      </header>
      {notes.length === 0 ? (
        <Empty listId={list.id} />
      ) : (
        <div className={css.ListContent}>
          {notes.map((note, i) => (
            <Note
              key={note.id}
              note={note}
              onFocus={() => dispatch({
                type: 'SET_INDEX',
                payload: {id: list.id, index: i},
              })}
              onRemove={onRemove}
              onNoteEvent={_handleNoteEvent} />
          ))}
        </div>
      )}
    </div>
  )

}

List.propTypes = {
  list: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onOrderUp: PropTypes.func.isRequired,
  onOrderDown: PropTypes.func.isRequired,
  onEnterAtStart: PropTypes.func.isRequired,
  onEnterAtEnd: PropTypes.func.isRequired,
  onEnterAtPos: PropTypes.func.isRequired,
  onBackspaceAtStartOfEmptyLine: PropTypes.func.isRequired,
  onBackspaceAtStartOfNonEmptyLine: PropTypes.func.isRequired,
  onTrashNote: PropTypes.func.isRequired,
}

const mapState = (state, {list}) => ({
  notes: list.notes.map(id => state.notes[id]),
})

const mapDispatch = (dispatch, {api, list}) => ({
  onRemove (noteId) {
    api.lists.destroyNote(list.id, noteId)
  },
  onOrderUp (noteId) {
    api.lists.orderNoteUp(list.id, noteId)
  },
  onOrderDown (noteId) {
    api.lists.orderNoteDown(list.id, noteId)
  },
  onEnterAtStart (noteId) {
    const index = list.notes.indexOf(noteId)
    api.lists.createNote(list.id, {}, index)
  },
  onEnterAtEnd (noteId) {
    const index = list.notes.indexOf(noteId) + 1
    api.lists.createNote(list.id, {}, index)
  },
  onEnterAtPos (noteId, pos) {
    let [left, right] = splitAt(
      getState(dispatch).notes[noteId].text,
      pos
    )
    api.notes.update(noteId, {text: left})
    api.lists.createNote(
      list.id,
      {text: right},
      list.notes.indexOf(noteId) + 1
    )
  },
  onBackspaceAtStartOfEmptyLine (noteId) {
    api.lists.destroyNote(list.id, noteId)
  },
  onBackspaceAtStartOfNonEmptyLine (noteId) {
    const i = list.notes.indexOf(noteId)
    if (i === 0) return
    api.lists.mergeNotes(list.id, list.notes[i - 1], noteId)
  },
  onTrashNote (noteId) {
    api.lists.destroyNote(list.id, noteId)
  },
})

export default WithApi(
  connect(mapState, mapDispatch)(List)
)
