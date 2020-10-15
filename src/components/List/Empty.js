import css from './style.css'
import React, {useState, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createApi} from '/api'

const Empty = ({listId, onSubmit}) => {
  const input = useRef()
  const [text, setText] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    if (text.trim() === '') return
    onSubmit(listId, text)
    requestAnimationFrame(() => {
      const noteDom = document.querySelector('.Note')
      const inputDom = noteDom.querySelector('input')
      inputDom.focus()
      noteDom.classList.add(css.NoteJustCreatedFromEmpty)
    })
  }
  const handleChange = (event) => {
    setText(event.target.value)
  }
  useEffect(() => {
    setText('')
    input.current.focus()
  }, [listId])
  return (
    <div className={css.Empty}>
      <form onSubmit={handleSubmit}>
        <input
          ref={input}
          value={text}
          placeholder="What needs to be done?"
          onChange={handleChange} />
      </form>
    </div>
  )
}

Empty.propTypes = {
  listId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  const api = createApi(dispatch)
  return {
    onSubmit (listId, text) {
      api.lists.createNote(listId, {text})
    }
  }
}

export default connect(null, mapDispatchToProps)(Empty)
