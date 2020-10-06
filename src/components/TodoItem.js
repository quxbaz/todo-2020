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
  top: '2px',
  left: '-3px',
  width: '24px',
}

const removeButtonStyle = {
  padding: '2px 6px',
  height: '27px',
  maxHeight: '27px',
}

function TodoItem ({todo, onToggle, onRemove, onEndEdit}) {

  /*
    State declarations
  */

  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  /*
    Event handlers
  */

  const handleEndEdit = (event) => {
    event.preventDefault()
    if (editText.trim() === '')
      return
    setIsEditing(false)
    setEditText(editText.trim())
    onEndEdit(todo.id, editText)
  }

  /*
    Rendering
  */

  const textStyle = {
    paddingRight: '8px',
    opacity: todo.isDone && 0.4,
    textDecoration: todo.isDone && 'line-through',
  }

  return (
    <div style={style}>
      <input
        type='checkbox'
        checked={todo.isDone}
        style={{...checkboxStyle, visibility: isEditing ? 'hidden' : 'visible'}}
        onChange={() => onToggle(todo.id, !todo.isDone)} />
      <div style={{width: '100%'}}>
        {isEditing ? (
          <form onSubmit={handleEndEdit}>
            <input
              autoFocus
              type='text'
              value={editText}
              style={{fontSize: '14px', width: '100%', padding: '2px 4px'}}
              onChange={(event) => setEditText(event.target.value)} />
          </form>
        ) : (
          <div style={textStyle} onClick={() => setIsEditing(true)}>
            {todo.text}
          </div>
        )}
      </div>
      {!isEditing && (
        <button style={removeButtonStyle} onClick={() => onRemove(todo.id)}>
          Remove
        </button>)}
    </div>
  )

}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEndEdit: PropTypes.func.isRequired,
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
    onEndEdit (id, text) {
      api.todos.update(id, {text})
    },
  }
}

export default connect(null, mapDispatchToProps)(TodoItem)
