import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createApi} from '/api'
import Note from './Note'

const List = ({
  list, notes,
  onEnterAtEnd,
}) => {

  const ref = useRef()

  function moveCaret (event, pos, DIRECTION) {

    function exec (input, pos) {
      requestAnimationFrame(() => {
        input.setSelectionRange(pos, pos)
      })
    }

    const sourceInput = event.currentTarget
    const sourceNote = sourceInput.closest('.Note')
    const targetNote = DIRECTION === 'UP' ? sourceNote.previousSibling : sourceNote.nextSibling

    if (targetNote) {
      const targetInput = targetNote.querySelector('input')
      targetInput.focus()
      exec(targetInput, pos)
    } else {
      exec(sourceInput, DIRECTION === 'UP' ? 0 : sourceInput.value.length)
    }

  }

  function handleKeyDown (event, id, pos) {
    if (event.keyCode === 38) moveCaret(event, pos, 'UP')
    else if (event.keyCode === 40) moveCaret(event, pos, 'DOWN')
  }

  return (
    <div ref={ref}>
      <h2>{list.title}</h2>
      {notes.map((note, i) => (
        <Note
          key={note.id}
          note={note}
          onEnterAtEnd={noteId => onEnterAtEnd(list.id, noteId)}
          onKeyDown={handleKeyDown} />
      ))}
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
    onEnterAtEnd (listId, noteId) {

      // ::RESUME::

      // ::TODO:: Too much indirection here from <TODO> to <NOTE>. Try
      // to alleviate this confusion without breaking any architectual
      // principles.

      // ::TODO:: Resolve some silliness here. We're using both {list}
      // in ownProps and listId in parameters. Which way is
      // correct. Should we assume that {list} is always going to
      // available. Or should the component be complete agnostic in
      // passing parameters to whatever container may wrap it.



      console.log('onEnterAtEnd')
      const pos = list.notes.indexOf(noteId) + 1
      api.lists.createNote(listId, pos)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
