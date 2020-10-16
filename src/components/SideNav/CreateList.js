import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createApi} from '/api'

const CreateList = ({text, onClick}) => {
  const handleClick = () => {
    onClick()
  }
  return (
    <div className={css.CreateList} onClick={handleClick}>
      <span className={css.CreateListText}>
        {text}
        <span className={css.CreateNewText}>create*</span>
      </span>
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
