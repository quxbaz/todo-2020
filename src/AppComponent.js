import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import InputField from './InputField'
import TodoList from './TodoList'

function AppComponent ({store}) {
  return (
    <Provider store={store}>
      <InputField />
      <TodoList />
    </Provider>
  )
}

AppComponent.propTypes = {
  store: PropTypes.object.isRequired,
}

export default AppComponent
