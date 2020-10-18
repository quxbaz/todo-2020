import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const TrashItem = ({onClick}) => {
  const className = classNames(css.TrashItem, css.Item)
  return (
    <div className={className} onClick={onClick}>
      <a>Trash</a>
    </div>
  )
}

TrashItem.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default TrashItem
