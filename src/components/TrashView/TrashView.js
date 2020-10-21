import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getSortedLists} from '/state/lists/selectors'

const getColClassName = (i) => `${css.Entry} ${css.Col}${i % 3 + 1}`

const TrashView = ({lists, onEmptyTrash}) => {
  return (
    <div className={css.TrashView}>
      <header className={css.Header}>
        <a onClick={onEmptyTrash}>Empty trash</a>
      </header>
      <div className={css.TrashContent}>
        {lists.map((list, i) => (
          <div key={list.id} className={getColClassName(i)}>
            <div className={css.EntryContent}>
              {list.title} {i}
            </div>
          </div>
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
