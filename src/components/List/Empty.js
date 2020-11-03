import css from './style.css'
import NoteCss from 'components/Note/style.css'
import React, {useState, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {provideApi} from 'api'

const Empty = ({listId, onSubmit}) => {
  const input = useRef()
  const [text, setText] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    if (text.trim() === '') return
    onSubmit(listId, text)
    requestAnimationFrame(() => {
      const noteDom = document.querySelector(`.${NoteCss.Note}`)
      const inputDom = noteDom.querySelector('input')
      inputDom.focus()
      noteDom.classList.add(css.NoteBornFromEmpty)
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

const mapDispatch = (dispatch, {api}) => ({
  onSubmit (listId, text) {
    api.lists.createNote(listId, {text})
  },
})

export default provideApi(
  connect(null, mapDispatch)(Empty)
)
