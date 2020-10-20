import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createApi} from '/api'
import Option from './Option'
import RenameField from './RenameField'

const RenameOption = ({listId, onSubmit}) => {

  const [isEditing, setIsEditing] = useState(false)

  const handleShortcut = (event) => {
    if (event.altKey && event.key === 'r')
      handleClick()
  }

  useEffect(() => {
    setIsEditing(false)
    window.addEventListener('keydown', handleShortcut)
    return () => window.removeEventListener('keydown', handleShortcut)
  }, [listId])

  const handleSubmit = (text) => {
    onSubmit(text)
  }

  const handleClick = () => {
    setIsEditing(true)
  }

  return isEditing ? (
    <RenameField onSubmit={handleSubmit} />
  ) : (
    <Option
      title='Alt-r'
      onClick={handleClick}>
      Rename
    </Option>
  )

}

RenameOption.propTypes = {
  listId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch, {listId}) => {
  const api = createApi(dispatch)
  return {
    onSubmit (text) {
      console.log('SUBMIT:', listId, text)
    },
  }
}

export default connect(null, mapDispatchToProps)(RenameOption)
