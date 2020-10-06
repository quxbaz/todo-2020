import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createApi} from '/api'

const style = {
  display: 'flex',
  width: '100%',
  margin: '20px 0',
}

const checkboxStyle = {
  position: 'relative',
  left: '-3px',
  width: '24px',
}

const removeButtonStyle = {
  padding: '2px 6px',
  height: '27px',
  maxHeight: '27px',
}

function TodoItem ({todo, onToggle, onRemove}) {

  /*
    State declarations
  */

  const [isEditing, setIsEditing] = useState(false)

  /*
    Event handlers
  */

  const handleToggle = () => onToggle(todo.id, !todo.isDone)
  const handleStartEdit = () => setIsEditing(true)
  const handleEndEdit = () => setIsEditing(false)
  const handleRemove = () => onRemove(todo.id)

  /*
    Rendering
  */

  const textStyle = {
    opacity: todo.isDone && 0.4,
    textDecoration: todo.isDone && 'line-through',
  }

  return (
    <div style={style}>
      <input
        type='checkbox'
        checked={todo.isDone}
        style={checkboxStyle}
        onChange={handleToggle} />
      <div style={{width: '100%', paddingRight: '8px'}}>
        {isEditing ?
          <input autoFocus type='text' /> : (
          <div style={textStyle} onClick={handleStartEdit}>
            {todo.text}
          </div>)}

      </div>
      <button style={removeButtonStyle} onClick={handleRemove}>
        Remove
      </button>
    </div>
  )

}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
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
  }
}

export default connect(null, mapDispatchToProps)(TodoItem)