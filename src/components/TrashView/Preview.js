import css from './style.css'
import React, {useState} from 'react'
import {createPortal} from 'react-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const Preview = ({rect, list, notes}) => {

  const [pos, setPos] = useState(() => [
    rect.x + rect.width,
    rect.y
  ].map(Math.round))

  // ::RESUME::
  // - Render to the left on the last row to avoid overflow.

  return createPortal(
    <div className={css.Preview} style={{
      left: pos[0] + 'px',
      top: pos[1] + 'px',
    }}>
      PREVIEW
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            {note.text}
          </li>
        ))}
      </ul>
    </div>,
    document.body
  )

}

Preview.propTypes = {
  rect: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object,).isRequired,
}

const mapStateToProps = (state, {list}) => ({
  notes: list.notes.map(id => state.notes[id]),
})

export default connect(mapStateToProps, null)(Preview)
