import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {values} from '/util'
import TodoItem from './TodoItem'

const TodoList = ({todos}) => {
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
  todos: state.order.map(id => state.todos[id]),
})

export default connect(mapStateToProps, null)(TodoList)
