import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createApi} from '/api'

const Option = ({children}) => (
  <a className={css.Option}>
    <span className={css.OptionText}>
      {children}
    </span>
  </a>
)

const OptionsBar = () => {
  return (
    <div className={css.OptionsBar}>
      <Option>Rename</Option>
      <Option>Delete</Option>
    </div>
  )
}

OptionsBar.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => {
  const api = createApi(dispatch)
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsBar)
