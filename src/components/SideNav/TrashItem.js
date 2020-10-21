import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import classNames from 'classnames'

const TrashItem = ({isActive, onClick}) => {
  const className = classNames(css.TrashItem, css.Item, {
    [css.isTrashActive]: isActive,
  })
  return (
    <div className={className} onClick={onClick}>
      <a>Trash</a>
    </div>
  )
}

TrashItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  isActive: state.workspace.activeList === '@@TRASH',
})

export default connect(mapStateToProps)(TrashItem)
