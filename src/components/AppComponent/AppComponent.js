import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import SideNav from '/components/SideNav'
import InputField from '/components/InputField'
import TodoList from '/components/TodoList'

const AppComponent = ({store}) => (
  <div className={css.AppComponent}>
    <Provider store={store}>
      <SideNav />
      <InputField />
      <TodoList />
    </Provider>
  </div>
)

AppComponent.propTypes = {
  store: PropTypes.object.isRequired,
}

export default AppComponent
