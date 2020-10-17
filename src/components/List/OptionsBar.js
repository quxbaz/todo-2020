import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createApi} from '/api'
import {createToast} from '/toasts'

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

const OptionsBar = ({onDelete}) => {
  const handleClickRename = () => {
    console.log('rename')
  }
  return (
    <div className={css.OptionsBar}>
      <Option onClick={handleClickRename}>Delete checked</Option>
      <Option onClick={handleClickRename}>Rename</Option>
      <Option onClick={onDelete}>Delete</Option>
    </div>
  )
}

OptionsBar.propTypes = {
  list: PropTypes.object.isRequired,
}

const mapDispatchToProps = (dispatch, {list}) => {
  const api = createApi(dispatch)
  return {
    onDelete (id) {
      api.lists.discard(list.id)
      createToast('toast-zone', {
        text: `"${list.title}" moved to trash.`,
      })
    },
  }
}

export default connect(null, mapDispatchToProps)(OptionsBar)
