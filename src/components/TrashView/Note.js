import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Note = ({note}) => (
  <div className={classNames(css.Note, {
    [css.isDone]: note.isDone,
  })}>
    {note.text}
  </div>
)

Note.propTypes = {
  note: PropTypes.object.isRequired,
}

export default Note
