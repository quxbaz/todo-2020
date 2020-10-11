import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {values} from '/util'
import {createApi} from '/api'
import Note from './Note'

const List = ({list, notes}) => {

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
          onKeyDown={handleKeyDown} />
      ))}
    </div>
  )

}

List.propTypes = {
  list: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
}

const mapStateToProps = (state, {list}) => ({
  notes: list.notes.map(id => state.notes[id]),
})

export default connect(mapStateToProps, null)(List)
