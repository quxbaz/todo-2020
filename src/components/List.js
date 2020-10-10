import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {values} from '/util'
import {createApi} from '/api'
import TodoItem from './TodoItem'

const List = ({list, todos}) => {

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

  function handleKeyDown (event, id, pos) {
    if (event.keyCode === 38) moveCaret(event, pos, 'UP')
    else if (event.keyCode === 40) moveCaret(event, pos, 'DOWN')
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

List.propTypes = {
  list: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  todos: state.order.map(id => state.todos[id]),
})

export default connect(mapStateToProps, null)(List)