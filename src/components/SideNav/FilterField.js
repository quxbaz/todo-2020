import css from './style.css'
import React from 'react'
import PropTypes from 'react'
import {connect} from 'react-redux'
// import classNames from 'classnames'

const FilterField = () => {
  return (
    <div className={css.FilterField}>
      <input
        className={css.FilterInput}
        placeholder='Filter' />
    </div>
  )
}

FilterField.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(FilterField)
