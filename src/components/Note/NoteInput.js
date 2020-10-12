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
  BACKSPACE_AT_START_OF_NEMPTY_LINE,
} = NOTE_EVENTS

class NoteInput extends React.Component {

  constructor (props) {
    super(props)
    this.ref = React.createRef()
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  dispatch (type, props={}) {
    this.props.onNoteEvent({type, ...props})
  }

  handleKeyDown (event) {

    const {props} = this
    const input = this.ref.current
    const d = this.dispatch.bind(this)

    const pos = input.selectionDirection === 'forward'
      ? input.selectionEnd
      : input.selectionStart

    // Up
    if (event.keyCode === 38)
      d(ARROW_UP)

    // Down
    else if (event.keyCode === 40)
      props.onArrowDown()

    // Left
    else if (event.keyCode === 37 && pos === 0)
      props.onArrowLeftAtStart()

    // Right
    else if (event.keyCode === 39 && pos === input.value.length)
      props.onArrowRightAtEnd()

    // Enter
    else if (event.keyCode === 13)
      if (pos === 0) props.onEnterAtStart()
      else if (pos === input.value.length) props.onEnterAtEnd()
      else props.onEnterAtPos()

    // Backspace
    else if (event.keyCode === 8)
      if (note.text === '') props.onBackspaceAtStartOf()
      else if (pos === 0) props.onBackspaceAtStartOfNonEmptyLine()

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
