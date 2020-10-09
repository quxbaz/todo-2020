import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {sortBy, values} from '/util'
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
  todos: sortBy(values(state.todos), 'order'),
})

export default connect(mapStateToProps, null)(TodoList)
