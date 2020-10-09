import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'

const Button = ({children, ...props}) => (
  <div {...props}>
    {children}
  </div>
)

export default Button
