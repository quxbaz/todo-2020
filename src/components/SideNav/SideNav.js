import css from './style.css'
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import FilterField from './FilterField'
import List from './List'

const SideNav = ({lists}) => {
  const [filter, setFilter] = useState('')
  const handleFilterChange = (text) => {
    setFilter(text)
  }
  const match = (text) => text.toLowerCase()
    .includes(filter.toLowerCase())
  return (
    <div className={css.SideNav}>
      <FilterField
        value={filter}
        onChange={handleFilterChange} />
      {lists.map((list) => (
        match(list.title) && <List key={list.id} list={list} />
      ))}
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
