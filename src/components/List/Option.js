import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Option = ({children, className, title, onClick}) => (
  <a
    className={classNames(css.Option, className)}
    title={title}
    onClick={onClick}>
    <span className={css.OptionText}>
      {children}
    </span>
  </a>
)

Option.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default Option
