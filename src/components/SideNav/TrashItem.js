import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {connect} from 'react-redux'
import {createApi} from '/api'

const TrashItem = () => {
  const className = classNames(css.TrashItem, css.Item)
  return (
    <div className={className}>
      <a>Trash</a>
    </div>
  )
}

TrashItem.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => {
  const api = createApi(dispatch)
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TrashItem)
