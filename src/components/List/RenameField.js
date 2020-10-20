import css from './style.css'
import React, {useState} from 'react'
import PropTypes from 'prop-types'

const RenameField = ({onSubmit}) => {

  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(text)
  }

  const handleChange = (event) => setText(event.target.value)

  return (
    <form className={css.RenameField} onSubmit={handleSubmit}>
      <input
        autoFocus
        type='text'
        value={text}
        onChange={handleChange} />
    </form>
  )

}

RenameField.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default RenameField
