import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from './state'
import InputField from './InputField'
// import TodoList from './TodoList'

interface App {
  component: React.ReactElement,
}

function createApp (): App {
  const store = createStore()
  const component = (
    <Provider store={store}>
      <InputField />
      {/* <TodoList /> */}
    </Provider>
  )
  return {
    component,
  }
}

export {createApp}
