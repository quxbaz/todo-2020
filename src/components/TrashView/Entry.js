import css from './style.css'
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Preview from './Preview'

const Entry = ({list, onDeleteEntry}) => {

  const [isDeleting, setIsDeleting] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const handleDeleteEntry = () => {
    if (isDeleting) return
    setIsDeleting(true)
    setTimeout(() => {
      onDeleteEntry(list.id)
    }, 500)
  }

  const handleMouseEnter = (event) => {
    setIsHovering(true)
  }

  const handleMouseLeave = (event) => {
    setIsHovering(false)
  }

  const props = {
    className: classNames(css.Entry, {
      [css.isDeleting]: isDeleting,
    }),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  }

  return (
    <>
      <div {...props} >
        <div className={css.EntryTitle}>
          <span>{list.title}</span>
        </div>
        <div className={css.EntryInfo}>
          {list.notes.length === 0
            ? '- -'
            : `${list.notes.length} · notes`}
          <a
            className={css.DeleteEntry}
            title='Delete'
            onClick={handleDeleteEntry}>
            🗙
          </a>
        </div>
      </div>
      <Preview />
    </>
  )

}

Entry.propTypes = {
  list: PropTypes.object.isRequired,
  onDeleteEntry: PropTypes.func.isRequired,
}

export default Entry
