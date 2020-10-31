import css from './style.css'
import React, {useState, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {WithApi} from 'api'
import {isListActive} from 'state/lists'

const List = ({list, isActive, lastCreated, onClick}) => {

  const ref = useRef()
  const [isBorn, setIsBorn] = useState(false)
  const [wasClicked, setWasClicked] = useState(false)

  useEffect(() => {
    if (list.id === lastCreated)
      setIsBorn(true)
  }, [])

  useEffect(() => {
    if (isActive && !wasClicked)
      ref.current.scrollIntoView({block: 'center'})
  }, [isActive, wasClicked])

  const handleClick = (event) => {
    event.preventDefault()
    setWasClicked(true)
    onClick(list.id)
  }

  return (
    <div
      ref={ref}
      attr-id={list.id}
      className={classNames(css.Item, {
        [css.ItemBorn]: isBorn,
        [css.isActive]: isActive,
      })}
      onClick={handleClick}>
        <a>
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

const mapState = (state, {list}) => ({
  isActive: isListActive(state, list.id),
})

const mapDispatch = (dispatch, {api}) => ({
  onClick (id) {
    api.history.setUrl(`/lists/${id}`)
  },
})

export default WithApi(
  connect(mapState, mapDispatch)(List)
)
