import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router} from 'react-router-dom'
import {connect, Provider} from 'react-redux'
import {ApiContext} from 'api'
import {useKeyDownListener} from 'hooks'
import HeaderBar from './HeaderBar'
import SideNav from 'components/SideNav'
import TrashView from 'components/TrashView'
import List from 'components/List'

const AppComponent = ({store, api, activeList, list}) => {

  useKeyDownListener(event => {
    if (event.ctrlKey && event.key === 'ArrowUp') {
      event.preventDefault()
      api.workspace.cyclePrevList()
    } else if (event.ctrlKey && event.key === 'ArrowDown') {
      event.preventDefault()
      api.workspace.cycleNextList()
    }
  })

  const renderContent = () => {
    if (activeList == null)
      return <div className={css.EmptyPane} />
    else if (activeList === '@@TRASH')
      return <TrashView />
    else
      return <List list={list} />
  }

  return (
    <Provider store={store}>
      <Router>
        <ApiContext.Provider value={api}>
          <div className={css.AppComponent}>
            <div className={css.InnerAppComponent}>
              <HeaderBar />
              <SideNav />
              <div className={css.ListFrame}>
                {renderContent()}
              </div>
            </div>
          </div>
        </ApiContext.Provider>
      </Router>
    </Provider>
  )

}

AppComponent.propTypes = {
  store: PropTypes.object.isRequired,
  api: PropTypes.object.isRequired,
  activeList: PropTypes.string,
  list: PropTypes.object,
}

const mapState = (state) => ({
  activeList: state.workspace.activeList,
  list: state.lists[state.workspace.activeList],
})

export default connect(mapState)(AppComponent)
