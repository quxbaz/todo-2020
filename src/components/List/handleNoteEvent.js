import {NOTE_EVENTS} from '/components/Note'
import moveCaret from './moveCaret'

const handleNoteEvent = (noteId, noteDom, event) => {

  if (event.type === NOTE_EVENTS.ARROW_UP)
    moveCaret(noteDom, 'UP')
  else if (event.type === NOTE_EVENTS.ARROW_DOWN)
    moveCaret(noteDom, 'DOWN')
  else if (event.type === NOTE_EVENTS.ARROW_LEFT_AT_START)
    moveCaret(noteDom, 'BACKWARD')
  else if (event.type === NOTE_EVENTS.ARROW_RIGHT_AT_END)
    moveCaret(noteDom, 'FORWARD')

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

export default handleNoteEvent
