import css from './index.css'
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createApi} from '/api'
import Checkbox from './Checkbox'
import EditForm from './EditForm'

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
    <div className={css.TodoItem}>
      <Checkbox
        checked={todo.isDone}
        style={{visibility: isEditing ? 'hidden' : 'visible'}}
        onChange={() => onToggle(todo.id, !todo.isDone)} />
      <div style={{width: '100%'}}>
        {isEditing ? (
          <EditForm
            value={editText}
            onChange={(event) => setEditText(event.target.value)}
            onSubmit={handleEndEdit} />
        ) : (
          <div style={textStyle} onClick={() => setIsEditing(true)}>
            {todo.text}
          </div>
        )}
      </div>
      {!isEditing && (
        <button className={css.RemoveButton} onClick={() => onRemove(todo.id)}>
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
