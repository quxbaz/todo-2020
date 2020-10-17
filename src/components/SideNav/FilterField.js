import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'

const FilterField = ({value, onChange, onSubmit}) => (
  <form className={css.FilterField} onSubmit={onSubmit}>
    <input
      className={css.FilterInput}
      placeholder='Find / create'
      title="Ctrl-/"
      value={value}
      onChange={(event) => onChange(event.target.value)} />
  </form>
)

FilterField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default FilterField
