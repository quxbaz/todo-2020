import css from './style.css'
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const Preview = ({rect, list, notes}) => {

  // const [pos, setPos] = useState([0, 0])

  // useEffect(() => {
  //   setPos([rect.x + rect.width, rect.y,])
  // }, [])

  const [pos, setPos] = useState(() => [rect.x, rect.y])

  return (
    <div className={css.Preview} style={{
      left: Math.round(pos[0]) + 'px',
      top: Math.round(pos[1]) + 'px',
    }}>
      PREVIEW [{Math.round(pos[0])}, {Math.round(pos[1])}]
      ::TODO:: Render this into a portal from the topmost element so
      you can use getBoundingClientRect() properly. It is getting the
      offset from the screen, not the parent component.
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            {note.text}
          </li>
        ))}
      </ul>
    </div>
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
