import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {provideApi} from 'api'
import {createToast} from 'toasts'
import {getSortedLists} from 'state/lists'
import EmptyView from './EmptyView'
import EmptyButton from './EmptyButton'
import Entry from './Entry'

const TrashView = ({lists, onRestore, onDelete}) => {
  return lists.length === 0 ? (
    <EmptyView />
  ) : (
    <div className={css.TrashView}>
      <header className={css.Header}>
        <EmptyButton />
      </header>
      <div className={css.TrashContent}>
        {lists.map((list, i) => (
          <Entry key={list.id} i={i} list={list}
            onRestore={onRestore} onDelete={onDelete} />
        ))}
      </div>
    </div>
  )
}

TrashView.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRestore: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

const isDead = list => !list.isAlive

const mapState = (state) => ({
  lists: getSortedLists(state.lists, isDead),
})

const mapDispatch = (dispatch, {api}) => ({
  onRestore (list) {
    api.lists.update(list.id, {isAlive: true})
    createToast('Toasts', {
      text: `Restored "${list.title}"`,
    })
  },
  onDelete (id) {
    api.lists.destroy(id)
  },
})

export default provideApi(
  connect(mapState, mapDispatch)(TrashView)
)
