import css from './index.css'
import React from 'react'
import PropTypes from 'prop-types'

const Switch = ({isOn, onClick}) => (
  <div className={css.Switch} onClick={onClick}>
    {isOn ? '☒' : '☐'}
  </div>
)

Switch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Switch
