import css from './index.css'
import React from 'react'
import PropTypes from 'prop-types'

const Button = ({children, className, style, onClick}) => (
  <div className={className} style={style} onClick={onClick}>
    {children}
  </div>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Button
