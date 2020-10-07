import css from './index.css'
import React from 'react'

const EditForm = ({value, onChange, onSubmit}) => (
  <form className={css.EditForm} onSubmit={onSubmit}>
    <input
      autoFocus
      type='text'
      value={value}
      onChange={onChange} />
  </form>
)

export default EditForm
