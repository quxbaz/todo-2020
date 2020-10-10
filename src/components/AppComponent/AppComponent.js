import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {connect, Provider} from 'react-redux'
import SideNav from '/components/SideNav'
import InputField from '/components/InputField'
import TodoList from '/components/TodoList'

const AppComponent = ({store, activeList}) => (
  <div className={css.AppComponent}>
    <Provider store={store}>
      <SideNav />
      <div className={css.ListFrame}>
        <InputField />
        <TodoList list={activeList} />
      </div>
    </Provider>
  </div>
)

AppComponent.propTypes = {
  store: PropTypes.object.isRequired,
  activeList: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  activeList: state.lists[state.workspace.activeList],
})

export default connect(mapStateToProps)(AppComponent)
