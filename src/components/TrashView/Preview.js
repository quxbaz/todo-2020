import css from './style.css'
import React, {useState, useRef, useEffect} from 'react'
import {createPortal} from 'react-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Note from './Note'

const Preview = ({i, rect, list, notes}) => {

  const isFarRight = (i % 3) === 2
  const ref = useRef()
  const [pos, setPos] = useState([0, 0])

  useEffect(() => {
    const width = ref.current.clientWidth
    setPos([
      rect.x + (isFarRight ? (width * -1) - 10 : rect.width + 10),
      rect.y
    ].map(Math.round))
    ref.current.style.opacity = 0.95
  }, [])

  return createPortal(
    <div ref={ref} className={css.Preview} style={{
      left: pos[0],
      top: pos[1],
    }}>
      <header>{list.title}</header>
      <div>
        {notes.map(note => (
          <Note key={note.id} note={note} />
        ))}
      </div>
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
