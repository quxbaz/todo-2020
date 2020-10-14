import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createApi} from '/api'

const List = ({list, onClick}) => {
  const handleClick = (event) => {
    event.preventDefault()
    onClick(list.id)
  }
  return (
    <a className={css.List}
      href=""
      onClick={handleClick}>
      {list.title}
    </a>
  )
}

List.propTypes = {
  list: PropTypes.object.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  const api = createApi(dispatch)
  return {
    onClick (id) {
      api.workspace.setActiveList(id)
    },
  }
}

export default connect(null, mapDispatchToProps)(List)
