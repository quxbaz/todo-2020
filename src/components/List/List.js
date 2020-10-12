import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createApi} from '/api'
import Note from '/components/Note'
import handleNoteEvent from './handleNoteEvent'

const List = ({list, notes, onEnterAtEnd}) => {

  return (
    <div>
      <h2>{list.title}</h2>
      <div>
        {notes.map((note, i) => (
          <Note
            key={note.id}
            note={note}
            onNoteEvent={handleNoteEvent} />
        ))}
      </div>
    </div>
  )

}

List.propTypes = {
  list: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
  onEnterAtEnd: PropTypes.func.isRequired,
}

const mapStateToProps = (state, {list}) => ({
  notes: list.notes.map(id => state.notes[id]),
})

const mapDispatchToProps = (dispatch, {list}) => {
  const api = createApi(dispatch)
  return {
    onEnterAtEnd (noteId) {
      // ::RESUME::
      const pos = list.notes.indexOf(noteId) + 1
      api.lists.createNote(list.id, pos)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
