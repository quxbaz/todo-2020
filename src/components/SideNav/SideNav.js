import css from './style.css'
import React, {useState, useRef} from 'react'
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

// ::RESUME::

const SideNav = ({lists, onSubmitFilter}) => {

  const content = useRef()
  const [filter, setFilter] = useState('')
  const resetFilter = () => setFilter('')

  const filteredLists = lists
    .filter(list => includes(list.title, filter))

  const listComponents = filteredLists
    .map(list => <List key={list.id} list={list} />)

  const text = filter.trim()
  const shouldShowCreateList = text.length > 0 &&
    !filteredLists.some(list => list.title.trim() === text)

  const handleSubmit = (event) => {
    event.preventDefault()
    const text = filter.trim()
    if (text.length === 0 || !shouldShowCreateList)
      return
    const id = onSubmitFilter(text)
    resetFilter()
    requestAnimationFrame(() => {
      const list = content.current
        .querySelector(`.List[attr-id="${id}"]`)
      list.scrollIntoView({block: 'center'})
      list.classList.add(css.ItemJustCreated)
    })
  }

  return (
    <div className={css.SideNav}>
      <FilterField
        value={filter}
        onChange={setFilter}
        onSubmit={handleSubmit} />
      <div ref={content} className={css.Content}>
        {shouldShowCreateList && <CreateList text={filter.trim()} onClick={handleSubmit} />}
        {listComponents}
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
      return id
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav)
