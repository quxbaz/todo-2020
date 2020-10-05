import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

function TodoItem ({todo}) {
  return (
    <div>
      {todo.text}
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
}

export default TodoItem
