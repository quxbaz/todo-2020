import css from './style.css'
import React, {useState, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {createApi} from '/api'

const List = ({list, isActive, lastCreated, onClick}) => {

  const ref = useRef()
  const [isBorn, setIsBorn] = useState(false)

  const handleClick = (event) => {
    event.preventDefault()
    onClick(list.id)
  }

  useEffect(() => {
    if (list.id === lastCreated)
      setIsBorn(true)
  }, [])

  useEffect(() => {
    if (isActive)
      ref.current.scrollIntoView({block: 'center'})
  }, [isActive])

  return (
    <div
      ref={ref}
      attr-id={list.id}
      className={classNames(css.Item, {
        [css.ItemBorn]: isBorn,
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
  lastCreated: PropTypes.string,
  onClick: PropTypes.func.isRequired,
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
