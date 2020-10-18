import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {createApi} from '/api'

const List = ({list, isActive, onClick}) => {
  const handleClick = (event) => {
    event.preventDefault()
    onClick(list.id)
  }
  return (
    <div
      attr-id={list.id}
      className={classNames(css.Item, {
        [css.isActive]: isActive,
      })}
      onClick={handleClick}>
        <a href="">
          {list.title}
          {list.notes.length > 0 && (
            <>
              <span className={css.Dot}>&middot;</span>
              <span className={css.Length}>
                {list.notes.length}
              </span>
            </>
          )}
        </a>
    </div>
  )
}

List.propTypes = {
  list: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
}

const mapStateToProps = (state, {list}) => ({
  isActive: state.workspace.activeList === list.id,
})

const mapDispatchToProps = (dispatch) => {
  const api = createApi(dispatch)
  return {
    onClick (id) {
      api.workspace.setActiveList(id)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
