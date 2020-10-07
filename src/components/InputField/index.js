import style from './index.css'
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createApi} from '/api'

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
    onSubmit(text.trim())
    setText('')
  }

  const handleChange = (event) => {
    setText(event.target.value)
  }

  /*
    Rendering
  */

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        type='text'
        placeholder='What needs to be done?'
        autoFocus
        value={text}
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
