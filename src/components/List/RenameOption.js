import SideNavCss from 'components/SideNav/style.css'
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {provideApi} from 'api'
import Option from './Option'
import RenameTextField from './RenameTextField'

const RenameOption = ({list, onSubmit}) => {

  const [text, setText] = useState(list.title)
  const [isEditing, setIsEditing] = useState(false)

  const handleShortcut = (event) => {
    if (event.altKey && event.key === 'r') {
      event.preventDefault()
      setIsEditing(true)
    } else if (event.key === 'Escape') {
      setIsEditing(false)
    }
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
    requestAnimationFrame(() => {
      document.querySelector(
        `.${SideNavCss.Item}[attr-id="${list.id}"]`
      ).scrollIntoView({block: 'center'})
    })
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

const mapDispatch = (dispatch, {api, list}) => ({
  onSubmit (text) {
    api.lists.update(list.id, {title: text})
  },
})

export default provideApi(
  connect(null, mapDispatch)(RenameOption)
)
