import css from './style.css'
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {createApi} from '/api'
import {getSortedLists} from '/state/lists/selectors'
import EmptyView from './EmptyView'

const Entry = ({list, onDeleteEntry}) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const handleDeleteEntry = () => {
    if (isDeleting) return
    setIsDeleting(true)
    setTimeout(() => {
      onDeleteEntry(list.id)
    }, 500)
  }
  return (
    <div className={classNames(css.Entry, {
      [css.isDeleting]: isDeleting,
    })}>
      <div className={css.EntryTitle}>
        {list.title}
      </div>
      <div className={css.EntryInfo}>
        {list.notes.length === 0
          ? '- -'
          : `${list.notes.length} notes`}
        <a
          className={css.DeleteEntry}
          title='Delete'
          onClick={handleDeleteEntry}>
          🗙
        </a>
      </div>
    </div>
  )
}

Entry.propTypes = {
  list: PropTypes.object.isRequired,
  onDeleteEntry: PropTypes.func.isRequired,
}

const TrashView = ({lists, onEmptyTrash, onDeleteEntry}) => {
  return lists.length === 0 ? (
    <EmptyView />
  ) : (
    <div className={css.TrashView}>
      <header className={css.Header}>
        <a onClick={onEmptyTrash}>Empty trash</a>
      </header>
      <div className={css.TrashContent}>
        {lists.map((list, i) => (
          <Entry key={list.id} list={list} onDeleteEntry={onDeleteEntry} />
        ))}
      </div>
    </div>
  )
}

TrashView.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteEntry: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  lists: getSortedLists(state, list => !list.isAlive),
})

const mapDispatchToProps = (dispatch) => {
  const api = createApi(dispatch)
  return {
    onEmptyTrash () {
      api.lists.emptyTrash()
    },
    onDeleteEntry (id) {
      api.lists.destroy(id)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrashView)
