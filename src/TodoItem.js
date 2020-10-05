import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createApi} from './api'

const style = {
  display: 'flex',
  width: '100%',
  margin: '20px 0',
}

function TodoItem ({todo, onToggle}) {

  const handleToggle = () => {
    onToggle(todo.id, !todo.isDone)
  }

  const textStyle = {
    width: '100%',
    textDecoration: todo.isDone && 'line-through',
  }

  return (
    <div style={style}>
      <input
        type='checkbox'
        checked={todo.isDone}
        style={{width: '24px'}}
        onChange={handleToggle} />
      <div style={textStyle}>
        {todo.text}
      </div>
    </div>
  )

}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  onToggle (id, isDone) {
    createApi(dispatch).todos.toggle(id, isDone)
  }
})

export default connect(null, mapDispatchToProps)(TodoItem)
