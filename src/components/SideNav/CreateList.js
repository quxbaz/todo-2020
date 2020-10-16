import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createApi} from '/api'

const CreateList = ({text, onClick}) => {
  return (
    <div className={css.CreateList}>
      <span className={css.CreateListText}>{text}</span>
      <span className={css.CreateNewText}>create*</span>
    </div>
  )
}

CreateList.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  const api = createApi(dispatch)
  return {
    onClick () {
      console.log('click')
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateList)
