import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {connect, Provider} from 'react-redux'
import SideNav from '/components/SideNav'
import List from '/components/List'

const AppComponent = ({store, activeList}) => (
  <Provider store={store}>
    <div className={css.AppComponent}>
      <div className={css.InnerAppComponent}>
        <div className={css.HeaderBar}>
          <div className={css.HeaderBarIcon}>🗇</div>
        </div>
        <SideNav />
        <div className={css.ListFrame}>
          {activeList == null
            ? <div className={css.EmptyPane} />
            : <List list={activeList} />}
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
