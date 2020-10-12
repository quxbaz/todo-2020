import css from './style.css'
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
    <form className={css.Form} onSubmit={handleSubmit}>
      <input
        id='InputField'
        className={css.Input}
        type='text'
        placeholder='Write your note here.'
        autoFocus
        autoComplete='off'
        value={text}
        onChange={handleChange} />
    </form>
  )

}

InputField.propTypes = {
  listId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch, {listId}) => {
  const api = createApi(dispatch)
  return {
    onSubmit (text) {
      api.lists.createNote(listId, null, {
        text,
        createdBy: 'INPUT_FIELD',
      })
    },
  }
}

export default connect(null, mapDispatchToProps)(InputField)
