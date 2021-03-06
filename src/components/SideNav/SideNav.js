import css from './style.css'
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {provideApi} from 'api'
import {getSortedLists} from 'state/lists'
import FilterField from './FilterField'
import List from './List'
import CreateList from './CreateList'
import TrashItem from './TrashItem'

const includes = (a, b) => {
  if (b === '')
    return true
  a = a.trim().toLowerCase()
  b = b.trim().toLowerCase()
  return a.includes(b)
}

const SideNav = ({lists, onSubmitFilter, onClickTrash}) => {

  const [filter, setFilter] = useState('')
  const [lastCreated, setLastCreated] = useState(null)

  const filteredLists = lists.filter(
    list => includes(list.title, filter)
  )

  const listComponents = filteredLists.map(
    list => <List key={list.id} list={list} lastCreated={lastCreated} />
  )

  const text = filter.trim()

  /*
    Only show the "create*" button if (1) The filter text is non-empty
    and (2) The filter text does not EXACTLY match any existing list
    titles.
  */
  const shouldShowCreateText = (
    text.length > 0 && !filteredLists.some(list => list.title.trim() === text)
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    const text = filter.trim()
    if (text.length === 0 || !shouldShowCreateText)
      return
    setLastCreated(onSubmitFilter(text))
    setFilter('')
  }

  return (
    <div
      className={classNames(css.SideNav, {
        [css.isFilterActive]: text.length > 0,
      })}>
      <FilterField
        value={filter}
        onChange={setFilter}
        onSubmit={handleSubmit} />
      <div className={css.Content}>
        {shouldShowCreateText && <CreateList text={filter.trim()} onClick={handleSubmit} />}
        {listComponents}
        <TrashItem onClick={onClickTrash} />
      </div>
    </div>
  )

}

SideNav.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSubmitFilter: PropTypes.func.isRequired,
  onClickTrash: PropTypes.func.isRequired,
}

const mapState = (state) => ({
  lists: getSortedLists(state.lists),
})

const mapDispatch = (dispatch, {api}) => ({
  onSubmitFilter (text) {
    const id = api.lists.create({title: text})
    api.history.setUrl(`/lists/${id}`)
    return id
  },
  onClickTrash () {
    api.history.setUrl('/trash')
  },
})

export default provideApi(
  connect(mapState, mapDispatch)(SideNav)
)
