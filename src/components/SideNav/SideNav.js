import css from './style.css'
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createApi} from '/api'
import FilterField from './FilterField'
import List from './List'
import CreateList from './CreateList'

const includes = (a, b) => {
  if (b === '')
    return true
  a = a.trim().toLowerCase()
  b = b.trim().toLowerCase()
  return a.includes(b)
}

const SideNav = ({lists, onSubmitFilter}) => {

  const [filter, setFilter] = useState('')
  const resetFilter = () => setFilter('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const text = filter.trim()
    if (listComponents.length === 0 && text.length > 0) {
      onSubmitFilter(text)
      resetFilter()
    }
  }

  const listComponents = lists
    .filter(list => includes(list.title, filter))
    .map(list => <List key={list.id} list={list} />)

  return (
    <div className={css.SideNav}>
      <FilterField
        value={filter}
        onChange={setFilter}
        onSubmit={handleSubmit} />
      <div className={css.Content}>
        {listComponents.length > 0
          ? listComponents
          : <CreateList text={filter.trim()} onClick={handleSubmit} />}
      </div>
    </div>
  )

}

SideNav.propTypes = {
  lists: PropTypes.array.isRequired,
  onSubmitFilter: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  lists: state.workspace.lists.map(id => state.lists[id]),
})

const mapDispatchToProps = (dispatch) => {
  const api = createApi(dispatch)
  return {
    onSubmitFilter (text) {
      const id = api.lists.create({title: text})
      api.workspace.setActiveList(id)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav)
