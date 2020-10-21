import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {connect, Provider} from 'react-redux'
import HeaderBar from './HeaderBar'
import SideNav from '/components/SideNav'
import List from '/components/List'

const AppComponent = ({store, activeList}) => (
  <Provider store={store}>
    <div id='Modals' className={css.Modals} />
    <div className={css.AppComponent}>
      <div className={css.InnerAppComponent}>
        <HeaderBar />
        <SideNav />
        <div className={css.ListFrame}>
          {activeList == null && <div className={css.EmptyPane} />}
          {activeList != null && <List list={activeList} />}
        </div>
      </div>
    </div>
  </Provider>
)

AppComponent.propTypes = {
  store: PropTypes.object.isRequired,
  activeList: PropTypes.object,
}

const mapStateToProps = (state) => ({
  activeList: state.lists[state.workspace.activeList],
})

export default connect(mapStateToProps)(AppComponent)
