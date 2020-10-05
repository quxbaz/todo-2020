import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import Frame from './Frame'
import InputField from './InputField'
import TodoList from './TodoList'

function AppComponent ({store}) {
  return (
    <Provider store={store}>
      <Frame>
        <InputField />
        <TodoList />
      </Frame>
    </Provider>
  )
}

AppComponent.propTypes = {
  store: PropTypes.object.isRequired,
}

export default AppComponent
