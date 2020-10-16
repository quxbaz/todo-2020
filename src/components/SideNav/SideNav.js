import css from './style.css'
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import FilterField from './FilterField'
import List from './List'

const includes = (a, b) => {
  if (b === '')
    return true
  a = a.trim().toLowerCase()
  b = b.trim().toLowerCase()
  return a.includes(b)
}

const SideNav = ({lists}) => {
  const [filter, setFilter] = useState('')
  const listComponents = lists
    .filter(list => includes(list.title, filter))
    .map(list => <List key={list.id} list={list} />)
  return (
    <div className={css.SideNav}>
      <FilterField
        value={filter}
        onChange={setFilter} />
      {listComponents.length > 0
        ? listComponents
        : <div />}
    </div>
  )
}

SideNav.propTypes = {
  lists: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  lists: state.workspace.lists.map(id => state.lists[id]),
})

export default connect(mapStateToProps, null)(SideNav)
