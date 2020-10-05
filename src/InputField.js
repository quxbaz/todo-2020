import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import api from './api'

function InputField ({onSubmit}) {

  /*
    State declarations
  */

  const [text, setText] = React.useState('')

  /*
    Event handlers
  */

  const handleSubmit = (event) => {
    event.preventDefault()
    if (text === '')
      return
    onSubmit(text)
    setText('')
  }

  const handleChange = (event) => {
    setText(event.target.value)
  }

  /*
    Rendering
  */

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='What needs to be done?'
        autoFocus
        value={text}
        onChange={handleChange} />
      <button type='submit'>Add</button>
    </form>
  )

}

InputField.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit (text) {
    api(dispatch).todos.createTodo(text)
  },
})

export default connect(null, mapDispatchToProps)(InputField)
