import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getSortedLists} from '/state/lists/selectors'

const Entry = ({list}) => (
  <div className={css.Entry}>
    <div className={css.EntryTitle}>
      {list.title}
    </div>
    <div className={css.EntryInfo}>
      {list.notes.length === 0
        ? '- -'
        : `${list.notes.length} notes`}
      <a className={css.DeleteEntry}>
        Delete
      </a>
    </div>
  </div>
)

Entry.propTypes = {
  list: PropTypes.object.isRequired,
}

const TrashView = ({lists, onEmptyTrash}) => {
  return (
    <div className={css.TrashView}>
      <header className={css.Header}>
        <a onClick={onEmptyTrash}>Empty trash</a>
      </header>
      <div className={css.TrashContent}>
        {lists.map((list, i) => (
          <Entry key={list.id} list={list} />
        ))}
      </div>
    </div>
  )
}

TrashView.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = (state) => ({
  lists: getSortedLists(state, list => !list.isAlive),
})

const mapDispatchToProps = (dispatch) => {
  return {
    onEmptyTrash () {
      console.log('EMPTY TRASH')
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrashView)
