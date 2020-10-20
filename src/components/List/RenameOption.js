import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createApi} from '/api'
import Option from './Option'
import RenameTextField from './RenameTextField'

const RenameOption = ({list, onSubmit}) => {

  const [text, setText] = useState(list.title)
  const [isEditing, setIsEditing] = useState(false)

  const handleShortcut = (event) => {
    if (event.altKey && event.key === 'r')
      setIsEditing(true)
    else if (event.key === 'Escape')
      setIsEditing(false)
  }

  useEffect(
    () => setText(list.title),
    [isEditing]
  )

  useEffect(() => {
    setIsEditing(false)
    window.addEventListener('keydown', handleShortcut)
    return () => window.removeEventListener('keydown', handleShortcut)
  }, [list.id])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (text.trim() === '') return
    setIsEditing(false)
    onSubmit(text)
  }

  return isEditing ? (
    <RenameTextField
      text={text}
      onBlur={() => setIsEditing(false)}
      onChange={value => setText(value)}
      onSubmit={handleSubmit} />
  ) : (
    <Option
      title='Alt-r'
      onClick={() => setIsEditing(true)}>
      Rename
    </Option>
  )

}

RenameOption.propTypes = {
  list: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch, {list}) => {
  const api = createApi(dispatch)
  return {
    onSubmit (text) {
      api.lists.update(list.id, {title: text})
    },
  }
}

export default connect(null, mapDispatchToProps)(RenameOption)
