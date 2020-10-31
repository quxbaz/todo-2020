import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {Router, Route} from 'stateful-router'
import {connect, Provider} from 'react-redux'
import {ApiContext} from 'api'
import {useKeyDownListener} from 'hooks'
import HeaderBar from './HeaderBar'
import SideNav from 'components/SideNav'
import TrashView from 'components/TrashView'
import List from 'components/List'

const Wrappers = ({children, store, api, url}) => (
  <Provider store={store}>
  <ApiContext.Provider value={api}>
  <Router path={url}>
    <div className={css.AppComponent}>
      <div className={css.InnerAppComponent}>
        {children}
      </div>
    </div>
  </Router>
  </ApiContext.Provider>
  </Provider>
)

const Content = () => (
  <>
    <Route route={'/'}>
      <div className={css.EmptyPane} />
    </Route>
    <Route route='/lists/:id'>
      <List />
    </Route>
    <Route route='/trash'>
      <TrashView />
    </Route>
  </>
)

const AppComponent = ({store, api, url}) => {

  useKeyDownListener(event => {
    if (event.ctrlKey && event.key === 'ArrowUp') {
      event.preventDefault()
      api.workspace.cycleToPrevList()
    } else if (event.ctrlKey && event.key === 'ArrowDown') {
      event.preventDefault()
      api.workspace.cycleToNextList()
    }
  })

  return (
    <Wrappers {...{store, api, url}}>
      <HeaderBar />
      <SideNav />
      <div className={css.ListFrame}>
        <Content />
      </div>
    </Wrappers>
  )

}

AppComponent.propTypes = {
  store: PropTypes.object.isRequired,
  api: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
}

const mapState = (state) => ({
  url: state.history.url,
})

export default connect(mapState)(AppComponent)
