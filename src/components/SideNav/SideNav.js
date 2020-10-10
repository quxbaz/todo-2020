import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {values, sortBy} from '/util'
// import {createApi} from '/api'
import List from './List'

const SideNav = ({lists}) => {

  return (
    <div className={css.SideNav}>
      {lists.map((list) => (
        <List key={list.id} list={list} />
      ))}
    </div>
  )

}

SideNav.propTypes = {
  lists: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  lists: sortBy(values(state.lists), 'title'),
})

export default connect(mapStateToProps, null)(SideNav)
