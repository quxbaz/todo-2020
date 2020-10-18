import css from './style.css'
import React, {useRef, useEffect} from 'react'
import PropTypes from 'prop-types'

const FilterField = ({value, onChange, onSubmit}) => {

  const ref = useRef()

  const handleFocusShortcut = (event) => {
    if (event.ctrlKey && event.key === '/') {
      event.preventDefault()
      ref.current.focus()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleFocusShortcut)
    return () => window.removeEventListener('keydown', handleFocusShortcut)
  }, [])

  return (
    <form className={css.FilterField} onSubmit={onSubmit}>
      <input
        ref={ref}
        className={css.FilterInput}
        placeholder='Find / create'
        title="Ctrl-/"
        value={value}
        onChange={(event) => onChange(event.target.value)} />
    </form>
  )

}

FilterField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default FilterField
