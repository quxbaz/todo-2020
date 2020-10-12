import React from 'react'
import PropTypes from 'prop-types'
import NOTE_EVENTS from './NOTE_EVENTS'

const {
  ARROW_UP,
  ARROW_DOWN,
  ARROW_LEFT_AT_START,
  ARROW_RIGHT_AT_END,
  ENTER_AT_START,
  ENTER_AT_END,
  ENTER_AT_POS,
  BACKSPACE_AT_START_OF_EMPTY_LINE,
  BACKSPACE_AT_START_OF_NON_EMPTY_LINE,
} = NOTE_EVENTS

class NoteInput extends React.Component {

  constructor (props) {
    super(props)
    this.ref = React.createRef()
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleKeyDown (event) {

    const {onNoteEvent} = this.props
    const input = this.ref.current
    const d = (type, props) => onNoteEvent({type, input, ...props})

    const pos = input.selectionDirection === 'forward'
      ? input.selectionEnd
      : input.selectionStart

    if (event.keyCode === 38)
      d(ARROW_UP)

    else if (event.keyCode === 40)
      d(ARROW_DOWN)

    else if (event.keyCode === 37 && pos === 0)
      d(ARROW_LEFT_AT_START)

    else if (event.keyCode === 39 && pos === input.value.length)
      d(ARROW_RIGHT_AT_END)

    else if (event.keyCode === 13)
      if (input.value.length === 0 || pos === input.value.length) d(ENTER_AT_END)
      else if (pos === 0) d(ENTER_AT_START)
      else d(ENTER_AT_POS, {pos})

    else if (event.keyCode === 8)
      if (note.text === '') d(BACKSPACE_AT_START_OF_EMPTY_LINE)
      else if (pos === 0) d(BACKSPACE_AT_START_OF_NON_EMPTY_LINE)

  }

  render () {
    const {className, value, onChange} = this.props
    return (
      <input
        ref={this.ref}
        className={className}
        value={value}
        onChange={onChange}
        onKeyDown={this.handleKeyDown} />
    )
  }

}

NoteInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onNoteEvent: PropTypes.func.isRequired,
}

NoteInput.defaultProps = {
  className: '',
}

export default NoteInput
