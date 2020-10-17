import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createApi} from '/api'

const Option = ({children, onClick}) => (
  <a className={css.Option} onClick={onClick}>
    <span className={css.OptionText}>
      {children}
    </span>
  </a>
)

Option.propTypes = {
  onClick: PropTypes.func.isRequired,
}

const OptionsBar = ({onRemove}) => {
  const handleClickRename = () => {
    console.log('rename')
  }
  return (
    <div className={css.OptionsBar}>
      <Option onClick={handleClickRename}>Rename</Option>
      <Option onClick={onRemove}>Remove</Option>
    </div>
  )
}

OptionsBar.propTypes = {
  listId: PropTypes.string.isRequired,
}

const mapDispatchToProps = (dispatch, {listId}) => {
  const api = createApi(dispatch)
  return {
    onRemove (id) {
      api.lists.remove(listId)
    },
  }
}

export default connect(null, mapDispatchToProps)(OptionsBar)
