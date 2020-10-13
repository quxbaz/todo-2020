import {NOTE_EVENTS} from '/components/Note'
import _moveCaret from './moveCaret'

const handleNoteEvent = (noteId, noteDom, event, eventMap) => {

  const moveCaret = (DIRECTION) => _moveCaret(noteDom, DIRECTION)

  if (event.type === NOTE_EVENTS.ARROW_UP)
    moveCaret('UP')

  else if (event.type === NOTE_EVENTS.ARROW_DOWN)
    moveCaret('DOWN')

  else if (event.type === NOTE_EVENTS.ARROW_LEFT_AT_START)
    moveCaret('BACKWARD')

  else if (event.type === NOTE_EVENTS.ARROW_RIGHT_AT_END)
    moveCaret('FORWARD')

  else if (event.type === NOTE_EVENTS.ENTER_AT_START)
    eventMap[NOTE_EVENTS.ENTER_AT_START](noteId)

  else if (event.type === NOTE_EVENTS.ENTER_AT_END) {
    eventMap[NOTE_EVENTS.ENTER_AT_END](noteId)
    requestAnimationFrame(() => moveCaret('DOWN'))  // Wait for DOM node to exist.
  }

  else if (event.type === NOTE_EVENTS.ENTER_AT_POS) {
    eventMap[NOTE_EVENTS.ENTER_AT_POS](noteId, event.pos)
    requestAnimationFrame(() => moveCaret('FORWARD'))  // Wait for DOM node to exist.
  }

  else if (event.type === NOTE_EVENTS.BACKSPACE_AT_START_OF_EMPTY_LINE) {
    moveCaret('BACKWARD')
    eventMap[NOTE_EVENTS.BACKSPACE_AT_START_OF_EMPTY_LINE](noteId)
  }

  else if (event.type === NOTE_EVENTS.BACKSPACE_AT_START_OF_NON_EMPTY_LINE) {
    eventMap[NOTE_EVENTS.BACKSPACE_AT_START_OF_NON_EMPTY_LINE](noteId)
  }

}

export default handleNoteEvent
