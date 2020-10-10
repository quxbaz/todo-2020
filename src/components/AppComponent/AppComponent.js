import css from './style.css'
import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import Sidebar from '/components/Sidebar'
import InputField from '/components/InputField'
import TodoList from '/components/TodoList'

const AppComponent = ({store}) => (
  <div className={css.AppComponent}>
    <Provider store={store}>
      <Sidebar />
      <InputField />
      <TodoList />
    </Provider>
  </div>
)

AppComponent.propTypes = {
  store: PropTypes.object.isRequired,
}

export default AppComponent
