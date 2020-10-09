import css from './style.css'
import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {createApi} from '/api'
import Switch from './Switch'
import Button from './Button'

const TodoItem = ({todo, onToggle, onRemove, onChange, onEnterKey}) => {

  const ref = useRef()
  const input = useRef()

  const [caretPos, setCaretPos] = useState(0)
  const [wasClicked, setWasClicked] = useState(false)

  const saveCaretPosition = () => {
    if (input.current.selectionDirection === 'forward')
      setCaretPos(input.current.selectionEnd)
    else
      setCaretPos(input.current.selectionStart)
  }

  // Restore the caret position on keyboard focus.
  const handleFocus = () => {
    if (wasClicked)
      return
    requestAnimationFrame(() => {
      input.current.setSelectionRange(caretPos, caretPos)
    })
  }

  const handleMouseDown = () => {
    // Allows the cursor to set the caret position instead of
    // restoring the caret position during keyboard navigation.
    setWasClicked(true)

    requestAnimationFrame(() => {
      saveCaretPosition()
      setWasClicked(false)
    })
  }

  const handleKeyDown = (event) => {
    requestAnimationFrame(saveCaretPosition)
    if (event.keyCode === 13 /* ENTER */) {
      onEnterKey(todo.id)
      setTimeout(() => {
        ref.current.nextSibling.querySelector('input').focus()
      }, 0)
    } else if (event.keyCode === 38 /* UP ARROW */) {
      const prev = ref.current.previousSibling
      if (prev)
        prev.querySelector('input').focus()
    } else if (event.keyCode === 40 /* DOWN ARROW */) {
      const next = ref.current.nextSibling
      if (next)
        next.querySelector('input').focus()
    } else if (todo.text === '' && event.keyCode === 8 /* BACKSPACE */) {
      event.preventDefault()
      const prev = ref.current.previousSibling
      if (prev)
        prev.querySelector('input').focus()
      else
        document.getElementById('MainTextInput').focus()
      onRemove(todo.id)
    } else if (caretPos === 0 && todo.text.length > 1 && event.keyCode === 8 /*BACKSPACE*/) {
      console.log('merge')
    }
  }

  return (
    <div ref={ref} className={css.TodoItem}>
      <Switch
        isOn={todo.isDone}
        onClick={() => onToggle(todo.id, !todo.isDone)} />
      <div style={{width: '100%'}}>
        <input
          ref={input}
          className={classNames(css.Input, {[css.isDone]: todo.isDone})}
          value={todo.text}
          onFocus={handleFocus}
          onMouseDown={handleMouseDown}
          onChange={event => onChange(todo.id, event.target.value)}
          onKeyDown={handleKeyDown} />
      </div>
      <Button className={css.RemoveButton} onClick={() => onRemove(todo.id)}>
        🗑
      </Button>
    </div>
  )

}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onEnterKey: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  const api = createApi(dispatch)
  return {
    onToggle (id, isDone) {
      api.todos.toggle(id, isDone)
    },
    onRemove (id) {
      api.todos.remove(id)
    },
    onChange (id, text) {
      api.todos.update(id, {text})
    },
    onEnterKey (id) {
      api.todos.create({insertAfter: id})
    }
  }
}

export default connect(null, mapDispatchToProps)(TodoItem)
