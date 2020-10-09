import css from './style.css'
import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createApi} from '/api'
import Switch from './Switch'
import Button from './Button'

const TodoItem = ({todo, onToggle, onRemove, onChange, onEnterKey}) => {
  const ref = useRef()
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      onEnterKey(todo.id)
    } else if (todo.text === '' && event.keyCode === 8) {
      event.preventDefault()
      const {previousSibling} = ref.current
      if (previousSibling)
        previousSibling.querySelector('input').focus()
      else
        document.getElementById('MainTextInput').focus()
      onRemove(todo.id)
    }
  }
  return (
    <div ref={ref} className={css.TodoItem}>
      <Switch
        isOn={todo.isDone}
        onClick={() => onToggle(todo.id, !todo.isDone)} />
      <div style={{width: '100%'}}>
        <input
          value={todo.text}
          className={css.Input}
          style={{
            opacity: todo.isDone ? 0.3 : 1,
            textDecoration: todo.isDone ? 'line-through' : 'none',
          }}
          onChange={event => onChange(todo.id, event.target.value)}
          onKeyDown={handleKeyDown} />
      </div>
      <Button className={css.RemoveButton} onClick={() => onRemove(todo.id)}>
        🗑
      </Button>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onEnterKey: PropTypes.func.isRequired,
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
    onChange (id, text) {
      api.todos.update(id, {text})
    },
    onEnterKey (id) {
      // api.todos.create('')
      // console.log('enter')
    }
  }
}

export default connect(null, mapDispatchToProps)(TodoItem)
