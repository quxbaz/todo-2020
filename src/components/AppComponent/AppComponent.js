import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {connect, Provider} from 'react-redux'
import SideNav from '/components/SideNav'
import List from '/components/List'

const AppComponent = ({store, activeList}) => (
  <Provider store={store}>
    <div className={css.AppComponent}>
      <div className={css.HeaderBar} />
      <SideNav />
      <div className={css.ListFrame}>
        <List list={activeList} />
      </div>
    </div>
  </Provider>
)

AppComponent.propTypes = {
  store: PropTypes.object.isRequired,
  activeList: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  activeList: state.lists[state.workspace.activeList],
})

export default connect(mapStateToProps)(AppComponent)
