import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'

const FilterField = ({value, onChange}) => (
  <div className={css.FilterField}>
    <input
      className={css.FilterInput}
      placeholder='Filter'
      value={value}
      onChange={(event) => onChange(event.target.value)} />
  </div>
)

FilterField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default FilterField
