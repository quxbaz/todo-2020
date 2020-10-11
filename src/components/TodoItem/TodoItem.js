/*
  ::TODO:: Rename to Note.js
*/

import css from './style.css'
import React, {useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {createApi} from '/api'
import Switch from './Switch'
import Button from './Button'

const TodoItem = ({
  todo, isLastCreated,
  onToggle, onChange, onKeyDown,
  onRemove, onMergeWithPrev,
  onEnterAtEnd, onEnterAtStart, onEnterAtPos,
}) => {

  const ref = useRef()

  useEffect(() => {
    if (isLastCreated && todo.createdBy === 'TODO_ITEM' && !todo.wasCreatedAtStartPos)
      ref.current.querySelector('input').focus()
  }, [])

  function withPrevInput (fn, alt) {
    const prev = ref.current.previousSibling
    if (prev)
      fn(prev.querySelector('input'), prev)
    else
      if (alt) alt()
  }

  function withNextInput (fn) {
    const next = ref.current.nextSibling
    if (next)
      fn(next.querySelector('input'), next)
  }

  function handleKeyDown (event) {
    const input = ref.current.querySelector('input')
    const pos = input.selectionDirection === 'forward'
      ? input.selectionEnd
      : input.selectionStart
    onKeyDown(event, todo.id, pos)
    if (event.keyCode === 13 /* ENTER */) {
      if (pos === input.value.length) onEnterAtEnd(todo.id)
      else if (pos === 0) onEnterAtStart(todo.id)
      else onEnterAtPos(todo.id, todo.text, pos)
    } else if (event.keyCode === 8 /* BACKSPACE */) {
      if (todo.text === '') {
        withPrevInput(prev => {
          event.preventDefault()
          prev.focus()
        }, () => {
          document.getElementById('InputField').focus()
        })
        onRemove(todo.id)
      } else if (pos === 0) {
        withPrevInput(prev => {
          event.preventDefault()
          prev.focus()
          // ::TODO:: Focus at last character
          onMergeWithPrev(todo.id, todo.text)
        })
      }
    } else if (event.keyCode === 37 /* LEFT */ && pos === 0) {
      withPrevInput((prev) => {
        event.preventDefault()
        prev.focus()
        prev.setSelectionRange(prev.value.length, prev.value.length)
      })
    } else if (event.keyCode === 39 /* RIGHT */ && pos === input.value.length) {
      withNextInput((next) => {
        event.preventDefault()
        next.focus()
        next.setSelectionRange(0, 0)
      })
    }
  }

  return (
    <div ref={ref} className={'TodoItem ' + css.TodoItem}>
      <Switch
        isOn={todo.isDone}
        onClick={() => onToggle(todo.id, !todo.isDone)} />
      <div style={{width: '100%'}}>
        <input
          className={classNames(css.Input, {[css.isDone]: todo.isDone})}
          value={todo.text}
          onKeyDown={handleKeyDown}
          onChange={event => onChange(todo.id, event.target.value)} />
      </div>
      <Button className={css.RemoveButton} onClick={() => onRemove(todo.id)}>
        🗑
      </Button>
    </div>
  )

}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  isLastCreated: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onMergeWithPrev: PropTypes.func.isRequired,
  onEnterAtEnd: PropTypes.func.isRequired,
  onEnterAtStart: PropTypes.func.isRequired,
  onEnterAtPos: PropTypes.func.isRequired,
}

const mapStateToProps = (state, {todo}) => ({
  isLastCreated: todo.id === state.meta.recent,
})

const mapDispatchToProps = (dispatch) => {
  const api = createApi(dispatch)
  return {
    onToggle (id, isDone) {
      api.todos.toggle(id, isDone)
    },
    onChange (id, text) {
      api.todos.update(id, {text})
    },
    onRemove (id) {
      api.todos.remove(id)
    },
    onMergeWithPrev (id, text) {
      console.log('MERGE')
      api.todos.merge(id)
    },
    onEnterAtEnd (id) {
      api.todos.create({text: '', insertAfter: id, createdBy: 'TODO_ITEM'})
    },
    onEnterAtStart (id) {
      api.todos.create({
        text: '',
        insertBefore: id,
        createdBy: 'TODO_ITEM',
        wasCreatedAtStartPos: true,
      })
    },
    onEnterAtPos (id, text, pos) {
      api.todos.update(id, {text: text.slice(0, pos)})
      api.todos.create({
        text: text.slice(pos),
        insertAfter: id,
        createdBy: 'TODO_ITEM',
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
