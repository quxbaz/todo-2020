import css from './index.css'
import React from 'react'

function Checkbox ({checked, style, onChange}) {
  return (
    <input
      className={css.Checkbox}
      type='checkbox'
      checked={checked}
      style={style}
      onChange={onChange} />
  )
}

export default Checkbox
