import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const style = {
  display: 'flex',
  width: '100%',
  margin: '20px 0',
}


function TodoItem ({todo}) {
  return (
    <div style={style}>
      <input type='checkbox' style={{width: '24px'}} />
      <div style={{width: '100%'}}>
        {todo.text}
      </div>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
}

export default TodoItem
