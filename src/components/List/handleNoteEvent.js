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

  else if (event.type === NOTE_EVENTS.ENTER_AT_START) {
  }

  else if (event.type === NOTE_EVENTS.ENTER_AT_END) {
    eventMap[NOTE_EVENTS.ENTER_AT_END](noteId)
    // Wait for DOM node to exist.
    requestAnimationFrame(() => moveCaret('DOWN'))
  }

  else if (event.type === NOTE_EVENTS.ENTER_AT_POS) {
  }

  else if (event.type === NOTE_EVENTS.BACKSPACE_AT_START_OF_EMPTY_LINE) {
  }

  else if (event.type === NOTE_EVENTS.BACKSPACE_AT_START_OF_NON_EMPTY_LINE) {
  }

}

export default handleNoteEvent
