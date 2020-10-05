import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {sortBy, values} from './util'
import TodoItem from './TodoItem'

const StyledItem = styled.div`
  display: flow;
`

function TodoList ({todos}) {
  return (
    <div>
      {todos.map((todo, i) => (
        <StyledItem key={todo.id}>
          <TodoItem todo={todo} />
        </StyledItem>
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
