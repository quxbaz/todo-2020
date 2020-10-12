/*

  ::TODO

  Mostly a <input> element interprets and exposes special
  functionality specifically relevant to note editing.

*/

import React from 'react'
import PropTypes from 'prop-types'

const noop = () => {}

class NoteInput extends React.Component {

  constructor (props) {
    super(props)
    this.ref = React.createRef()
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  // handleKeyDown (event) {
  //   const {ref} = this
  //   const {inputMap} = this.props
  //   const input = ref.current.querySelector('input')
  //   const pos = input.selectionDirection === 'forward'
  //     ? input.selectionEnd
  //     : input.selectionStart
  //   onKeyDown(event, note.id, pos)
  //   if (event.keyCode === 13 /* ENTER */) {
  //     if (pos === input.value.length) onEnterAtEnd(note.id)
  //     else if (pos === 0) onEnterAtStart(note.id)
  //     else onEnterAtPos(note.id, note.text, pos)
  //   } else if (event.keyCode === 8 /* BACKSPACE */) {
  //     if (note.text === '') {
  //       withPrevInput(prev => {
  //         event.preventDefault()
  //         prev.focus()
  //       }, () => {
  //         document.getElementById('InputField').focus()
  //       })
  //       onRemove(note.id)
  //     } else if (pos === 0) {
  //       withPrevInput(prev => {
  //         event.preventDefault()
  //         prev.focus()
  //         // ::TODO:: Focus at last character
  //         onMergeWithPrev(note.id, note.text)
  //       })
  //     }
  //   } else if (event.keyCode === 37 /* LEFT */ && pos === 0) {
  //     withPrevInput((prev) => {
  //       event.preventDefault()
  //       prev.focus()
  //       prev.setSelectionRange(prev.value.length, prev.value.length)
  //     })
  //   } else if (event.keyCode === 39 /* RIGHT */ && pos === input.value.length) {
  //     withNextInput((next) => {
  //       event.preventDefault()
  //       next.focus()
  //       next.setSelectionRange(0, 0)
  //     })
  //   }
  // }

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
