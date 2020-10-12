import React from 'react'
import PropTypes from 'prop-types'

class NoteInput extends React.Component {

  constructor (props) {
    super(props)
    this.ref = React.createRef()
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleKeyDown (event) {

    const {props} = this
    const input = this.ref.current

    const pos = input.selectionDirection === 'forward'
      ? input.selectionEnd
      : input.selectionStart

    // Up
    if (event.keyCode === 38)
      props.onArrowUp()

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
  onArrowUp: PropTypes.func.isRequired,
  onArrowDown: PropTypes.func.isRequired,
  onArrowLeftAtStart: PropTypes.func.isRequired,
  onArrowRightAtEnd: PropTypes.func.isRequired,
  onEnterAtStart: PropTypes.func.isRequired,
  onEnterAtEnd: PropTypes.func.isRequired,
  onEnterAtPos: PropTypes.func.isRequired,
  onBackspaceAtStartOfEmptyLine: PropTypes.func.isRequired,
  onBackspaceAtStartOfNonEmptyLine: PropTypes.func.isRequired,
}

NoteInput.defaultProps = {
  className: '',
}

export default NoteInput
