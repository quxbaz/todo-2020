import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from './state'
import InputField from './InputField'
import TodoList from './TodoList'

class App {

  constructor () {
    this.store = createStore()
    this.reactComponent = (
      <Provider store={this.store}>
        <InputField />
        <TodoList />
      </Provider>
    )
  }

}

export default App
