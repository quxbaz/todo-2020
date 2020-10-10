import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {values} from '/util'
import TodoItem from './TodoItem'

const TodoList = ({todos}) => {

  const ref = useRef()

  function moveCaret (event, pos, DIRECTION) {

    function exec (input, pos) {
      requestAnimationFrame(() => {
        input.setSelectionRange(pos, pos)
      })
    }

    const sourceInput = event.currentTarget
    const sourceTodo = sourceInput.closest('.TodoItem')
    const targetTodo = DIRECTION === 'UP' ? sourceTodo.previousSibling : sourceTodo.nextSibling

    if (targetTodo) {
      const targetInput = targetTodo.querySelector('input')
      targetInput.focus()
      exec(targetInput, pos)
    } else {
      exec(sourceInput, DIRECTION === 'UP' ? 0 : sourceInput.value.length)
    }

  }

  function handleEnterKey () {
    // onEnterKey(todo.id)
    // setTimeout(() => {
    //   ref.current.nextSibling.querySelector('input').focus()
    // }, 0)
  }

  function handleBackspaceKey () {
    event.preventDefault()
    const prev = ref.current.previousSibling
    if (prev)
      prev.querySelector('input').focus()
    else
      document.getElementById('MainTextInput').focus()
  }

  function mergeTodos () {
    console.log('MERGE')
  }

  function handleKeyDown (event, pos) {
    if (event.keyCode === 38) moveCaret(event, pos, 'UP')
    else if (event.keyCode === 40) moveCaret(event, pos, 'DOWN')
    else if (event.keyCode === 13) handleEnterKey()
    else if (event.keyCode === 8) {
      // if (todo.text.length === 0) {
      //   // onRemove(todo.id)
      // } else if (true /* caretPos === 0 */) {
      //   // mergeTodos()
      // }
    }
  }

  return (
    <div ref={ref}>
      {todos.map((todo, i) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onKeyDown={handleKeyDown} />
      ))}
    </div>
  )

}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  todos: state.order.map(id => state.todos[id]),
})

export default connect(mapStateToProps, null)(TodoList)
