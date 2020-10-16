import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'

const CreateList = ({text, onClick}) => (
  <div className={css.CreateList} onClick={onClick}>
    <span className={css.CreateListText}>
      {text}
      <span className={css.CreateNewText}>create</span>
    </span>
  </div>
)

CreateList.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default CreateList
