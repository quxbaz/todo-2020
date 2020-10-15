import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {splitAt, getState} from '/util'
import {createApi} from '/api'
import Note, {NOTE_EVENTS} from '/components/Note'
import handleNoteEvent from './handleNoteEvent'

class List extends React.Component {

  constructor(props) {
    super(props)
    this.handleNoteEvent = this.handleNoteEvent.bind(this)
  }

  handleNoteEvent (noteId, noteDom, event) {
    const {props} = this
    handleNoteEvent(noteId, noteDom, event, {
      [NOTE_EVENTS.ENTER_AT_START]: props.onEnterAtStart,
      [NOTE_EVENTS.ENTER_AT_END]: props.onEnterAtEnd,
      [NOTE_EVENTS.ENTER_AT_POS]: props.onEnterAtPos,
      [NOTE_EVENTS.BACKSPACE_AT_START_OF_EMPTY_LINE]: props.onBackspaceAtStartOfEmptyLine,
      [NOTE_EVENTS.BACKSPACE_AT_START_OF_NON_EMPTY_LINE]: props.onBackspaceAtStartOfNonEmptyLine,
    })
  }

  render () {
    const {list, notes, onRemove} = this.props
    return (
      <div className={css.List}>
        <h2>{list.title}</h2>
        {notes.length === 0 ? (
          <div>EMPTY</div>
        ) : (
          <div>
            {notes.map((note, i) => (
              <Note
                key={note.id}
                note={note}
                onRemove={onRemove}
                onNoteEvent={this.handleNoteEvent} />
            ))}
          </div>
        )}
      </div>
    )
  }

}

List.propTypes = {
  list: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEnterAtStart: PropTypes.func.isRequired,
  onEnterAtEnd: PropTypes.func.isRequired,
  onEnterAtPos: PropTypes.func.isRequired,
  onBackspaceAtStartOfEmptyLine: PropTypes.func.isRequired,
  onBackspaceAtStartOfNonEmptyLine: PropTypes.func.isRequired,
}

const mapStateToProps = (state, {list}) => ({
  notes: list.notes.map(id => state.notes[id]),
})

const mapDispatchToProps = (dispatch, {list}) => {
  const api = createApi(dispatch)
  return {
    onRemove (noteId) {
      api.lists.destroyNote(list.id, noteId)
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
