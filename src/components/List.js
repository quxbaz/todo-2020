/*

  ::TODO::

  The <Note> component should be the place describing its input
  events. <List> should not be interpreting fine-grained events like
  reading from event.keyCode. Instead <Note> should expose
  onArrowUp/onArrowDown/onEnterKey functions.

  For convenience it can package the exposure of these related event
  handlers into something else instead of having all the logic being
  wired in <Note>; something more generic and reusable.

  Instead of plugging into every handler individually a la:

    <Component
      onArrowUp={...}
      onArrowDown={...}
      onEnterAtEndOfLine={...}
      onEnterAtStartOfLine={...}
      onEnterAtMiddleOfLine={...} />

  You can perhaps package them up, or something.

  Input should be a special input that handles the low-level event
  logic and exposes high level callbacks.

  Move caret should occur in the special <Input> component.

  ::TODO::

  - Is 'useRef' necessary?

*/

import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {noop} from '/util'
import {createApi} from '/api'
import Note, {NOTE_EVENTS} from './Note'

const List = ({
  list, notes,
  onEnterAtEnd,
}) => {

  const ref = useRef()

  // function moveCaret (event, pos, DIRECTION) {

  //   function exec (input, pos) {
  //     requestAnimationFrame(() => {
  //       input.setSelectionRange(pos, pos)
  //     })
  //   }

  //   const sourceInput = event.currentTarget
  //   const sourceNote = sourceInput.closest('.Note')
  //   const targetNote = DIRECTION === 'UP' ? sourceNote.previousSibling : sourceNote.nextSibling

  //   if (targetNote) {
  //     const targetInput = targetNote.querySelector('input')
  //     targetInput.focus()
  //     exec(targetInput, pos)
  //   } else {
  //     exec(sourceInput, DIRECTION === 'UP' ? 0 : sourceInput.value.length)
  //   }

  // }

  // function handleKeyDown (event, id, pos) {
  //   if (event.keyCode === 38) moveCaret(event, pos, 'UP')
  //   else if (event.keyCode === 40) moveCaret(event, pos, 'DOWN')
  // }

  const ifPrev = (noteElement, yes, no=noop) => {
    const prev = noteElement.previousSibling
    if (prev) yes(prev, prev.querySelector('input'))
    else no()
  }

  const ifNext = (noteElement, yes, no=noop) => {
    const next = noteElement.nextSibling
    if (next) yes(next, next.querySelector('input'))
    else no()
  }

  const handleNoteEvent = (noteId, noteElement, event) => {

    if (event.type === NOTE_EVENTS.ARROW_UP) {
      ifPrev(noteElement, (prev, input) => {
        input.focus()
      })
    }

    else if (event.type === NOTE_EVENTS.ARROW_DOWN) {
    }

    else if (event.type === NOTE_EVENTS.ARROW_LEFT_AT_START) {
    }

    else if (event.type === NOTE_EVENTS.ARROW_RIGHT_AT_END) {
    }

    else if (event.type === NOTE_EVENTS.ENTER_AT_START) {
    }

    else if (event.type === NOTE_EVENTS.ENTER_AT_END) {
    }

    else if (event.type === NOTE_EVENTS.ENTER_AT_POS) {
    }

    else if (event.type === NOTE_EVENTS.BACKSPACE_AT_START_OF_EMPTY_LINE) {
    }

    else if (event.type === NOTE_EVENTS.BACKSPACE_AT_START_OF_NON_EMPTY_LINE) {
    }

  }

  return (
    <div ref={ref}>
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
