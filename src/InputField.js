import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createApi} from './api'

/*
  Styles
*/

const formStyle = {
  display: 'flex',
  marginBottom: '20px',
  border: '1px solid #000',
}

const inputStyle = {
  width: '100%',
  height: '40px',
  padding: '0 24px',
  border: 'none',
  outline: 'none',
  fontSize: '14px',
}

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
    <form style={formStyle} onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='What needs to be done?'
        autoFocus
        value={text}
        style={inputStyle}
        onChange={handleChange} />
    </form>
  )

}

InputField.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit (text) {
    createApi(dispatch).todos.create(text)
  },
})

export default connect(null, mapDispatchToProps)(InputField)
