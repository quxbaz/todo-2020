import css from './style.css'
import React, {useState, useRef, useEffect} from 'react'
import {createPortal} from 'react-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const Preview = ({i, rect, list, notes}) => {

  const isFarRight = (i % 3) === 2
  const ref = useRef()
  const [pos, setPos] = useState([0, 0])

  useEffect(() => {
    setPos([
      rect.x + (isFarRight ? ref.current.clientWidth * -1 : rect.width),
      rect.y
    ].map(Math.round))
  }, [])

  return createPortal(
    <div ref={ref} className={css.Preview} style={{
      left: pos[0],
      top: pos[1],
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
  i: PropTypes.number.isRequired,
  rect: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object,).isRequired,
}

const mapStateToProps = (state, {list}) => ({
  notes: list.notes.map(id => state.notes[id]),
})

export default connect(mapStateToProps, null)(Preview)
