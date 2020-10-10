import css from './style.css'
import React, {useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {createApi} from '/api'
import Switch from './Switch'
import Button from './Button'

const TodoItem = ({
  todo, isLastCreated,
  onToggle, onRemove, onChange, onKeyDown, onSubmit}) => {

  const ref = useRef()

  useEffect(() => {
    if (isLastCreated && todo.createdBy === 'TODO_ITEM')
      ref.current.querySelector('input').focus()
  }, [])

  function handleKeyDown (event) {
    const input = ref.current.querySelector('input')
    const pos = input.selectionDirection === 'forward'
      ? input.selectionEnd
      : input.selectionStart
    onKeyDown(event, todo.id, pos)
    if (event.keyCode === 13)
      onSubmit(todo.id)
  }

  return (
    <div ref={ref} className={'TodoItem ' + css.TodoItem}>
      <Switch
        isOn={todo.isDone}
        onClick={() => onToggle(todo.id, !todo.isDone)} />
      <div style={{width: '100%'}}>
        <input
          className={classNames(css.Input, {[css.isDone]: todo.isDone})}
          value={todo.text}
          onKeyDown={handleKeyDown}
          onChange={event => onChange(todo.id, event.target.value)} />
      </div>
      <Button className={css.RemoveButton} onClick={() => onRemove(todo.id)}>
        🗑
      </Button>
    </div>
  )

}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  isLastCreated: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const mapStateToProps = (state, {todo}) => ({
  isLastCreated: todo.id === state.meta.recent,
})

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
    onSubmit (id) {
      api.todos.create({text: '', insertAfter: id, createdBy: 'TODO_ITEM'})
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
