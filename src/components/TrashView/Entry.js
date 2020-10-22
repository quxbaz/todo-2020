import css from './style.css'
import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Preview from './Preview'

const Entry = ({i, list, onDeleteEntry}) => {

  const ref = useRef()
  const [isDeleting, setIsDeleting] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  const handleDeleteEntry = () => {
    if (isDeleting) return
    setIsDeleting(true)
    setTimeout(() => {
      onDeleteEntry(list.id)
    }, 500)
  }

  const props = {
    className: classNames(css.Entry, {
      [css.isDeleting]: isDeleting,
    }),
    onMouseEnter: () => setShowPreview(true),
    onMouseLeave: () => setShowPreview(false),
  }

  return (
    <>
      <div ref={ref} {...props}>
        <div className={css.EntryTitle}>
          <span>{list.title}</span>
        </div>
        <div className={css.EntryInfo}>
          {list.notes.length === 0
            ? <i style={{color: 'hsla(0, 0%, 55%, 0.8)'}}>Empty</i>
            : `${list.notes.length} · notes`}
          <a
            className={css.DeleteEntry}
            title='Delete'
            onClick={handleDeleteEntry}>
            🗙
          </a>
        </div>
      </div>
      {showPreview && list.notes.length > 0 && (
        <Preview
          i={i}
          rect={ref.current.getBoundingClientRect()}
          list={list} />
      )}
    </>
  )

}

Entry.propTypes = {
  i: PropTypes.number.isRequired,
  list: PropTypes.object.isRequired,
  onDeleteEntry: PropTypes.func.isRequired,
}

export default Entry
