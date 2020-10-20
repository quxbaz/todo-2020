import css from './style.css'
import React, {useRef, useEffect} from 'react'
import PropTypes from 'prop-types'

const RenameTextField = ({text, onBlur, onChange, onSubmit}) => {

  const input = useRef()

  useEffect(() => {
    input.current.focus()
    requestAnimationFrame(() => {
      input.current.setSelectionRange(0, -1)
    })
  }, [])

  return (
    <form className={css.RenameTextField} onSubmit={onSubmit}>
      <input
        ref={input}
        value={text}
        onBlur={onBlur}
        onChange={event => onChange(event.target.value)} />
    </form>
  )

}

RenameTextField.propTypes = {
  text: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default RenameTextField
