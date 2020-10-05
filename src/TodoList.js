import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {sortBy, values} from './util'
import TodoItem from './TodoItem'

function TodoList ({todos}) {
  return (
    <div>
      {todos.map((todo, i) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  todos: sortBy(values(state.todos), 'timestamp')
})

export default connect(mapStateToProps)(TodoList)
