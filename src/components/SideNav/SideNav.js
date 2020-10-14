import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {values, sortBy} from '/util'
// import {createApi} from '/api'
import List from './List'

const SideNav = ({lists}) => (
  <div className={css.SideNav}>
    {lists.map((list) => (
      <div className={css.Item}>
        <List key={list.id} list={list} />
      </div>
    ))}
  </div>
)

SideNav.propTypes = {
  lists: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  lists: state.workspace.lists.map(id => state.lists[id]),
})

export default connect(mapStateToProps, null)(SideNav)
