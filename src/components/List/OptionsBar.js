import css from './style.css'
import React, {useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {createApi} from '/api'
import {createToast} from '/toasts'

const Option = ({children, className, title, onClick}) => (
  <a
    className={classNames(css.Option, className)}
    title={title}
    onClick={onClick}>
    <span className={css.OptionText}>
      {children}
    </span>
  </a>
)

Option.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

const OptionsBar = ({list, anyNotesChecked, onClear, onDelete}) => {

  const ref = useRef()

  const handleShortcuts = (event) => {
    if (event.altKey && event.key === 'c' && anyNotesChecked) {
      // We have to trigger an artificial click event here to trigger a
      // synthetic React event otherwise we run into a weird rendering error.
      const mouseEvent = new MouseEvent('click', {view: window, bubbles: true})
      ref.current.querySelector(`.${css.Clear}`)
        .dispatchEvent(mouseEvent)
    } else if (event.altKey && event.key === 'd') {
      onDelete()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleShortcuts)
    return () => window.removeEventListener('keydown', handleShortcuts)
  }, [list.id, anyNotesChecked])

  const handleClickRename = () => {
    console.log('RENAME')
  }

  const className = classNames(css.OptionsBar, {
    [css.anyNotesChecked]: anyNotesChecked,
  })

  return (
    <div ref={ref} className={className}>
      <Option
        className={css.Clear}
        title='Alt-c'
        onClick={onClear}>
        Clear checked notes
      </Option>
      <Option onClick={handleClickRename}>Rename</Option>
      <Option
        className={css.Delete}
        title='Alt-d'
        onClick={onDelete}>
        Delete
      </Option>
    </div>
  )

}

OptionsBar.propTypes = {
  list: PropTypes.object.isRequired,
  anyNotesChecked: PropTypes.bool.isRequired,
  onClear: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

const mapStateToProps = (state, {list}) => ({
  anyNotesChecked: list.notes
    .map(id => state.notes[id])
    .some(note => note.isDone)
})

const mapDispatchToProps = (dispatch, {list}) => {
  const api = createApi(dispatch)
  return {
    onClear () {
      api.lists.clearNotes(list.id)
      // api.lists.destroyNote(list.id, list.notes[0])
    },
    onDelete () {
      api.lists.discard(list.id)
      createToast('toast-zone', {
        text: `"${list.title}" moved to trash.`,
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsBar)
