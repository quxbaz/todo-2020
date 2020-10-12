import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
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
    })
  }

  render () {
    const {list, notes} = this.props
    return (
      <div>
        <h2>{list.title}</h2>
        <div>
          {notes.map((note, i) => (
            <Note
              key={note.id}
              note={note}
              onNoteEvent={this.handleNoteEvent} />
          ))}
        </div>
      </div>
    )
  }

}

List.propTypes = {
  list: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
  onEnterAtStart: PropTypes.func.isRequired,
  onEnterAtEnd: PropTypes.func.isRequired,
  onEnterAtPos: PropTypes.func.isRequired,
}

const mapStateToProps = (state, {list}) => ({
  notes: list.notes.map(id => state.notes[id]),
})

const mapDispatchToProps = (dispatch, {list}) => {
  const api = createApi(dispatch)
  return {
    onEnterAtStart (noteId) {
      const i = list.notes.indexOf(noteId)
      api.lists.createNote(list.id, i)
    },
    onEnterAtEnd (noteId) {
      const i = list.notes.indexOf(noteId) + 1
      api.lists.createNote(list.id, i)
    },
    onEnterAtPos (noteId) {
      console.log('pos')
      // const pos = list.notes.indexOf(noteId) + 1
      // api.lists.createNote(list.id, pos)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
