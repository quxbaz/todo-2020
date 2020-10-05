import React from 'react'
import {createStore} from './state'
import AppComponent from './AppComponent'

// ::TEMP::
import {createApi} from './api'

function createApp () {
  const store = createStore()

  // ::TEMP::

  const api = createApi(store.dispatch)

  const todo1 = api.todos.create('one')
  const todo2 = api.todos.create('two')
  const todo3 = api.todos.create('three')
  const todo4 = api.todos.create('four')
  const todo5 = api.todos.create('five')

  api.todos.toggle(todo1, true)
  api.todos.toggle(todo3, true)

  // ::END TEMP::

  return {
    store,
    component: <AppComponent store={store} />
  }
}

export {
  createApp,
}
