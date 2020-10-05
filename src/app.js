import React from 'react'
import {createStore} from './state'
import AppComponent from './AppComponent'

// ::TEMP::
import {createApi} from './api'

function createApp () {
  const store = createStore()

  // ::TEMP::
  const api = createApi(store.dispatch)
  api.todos.create('one')
  api.todos.create('two')
  let id = api.todos.create('three')
  api.todos.create('four')
  api.todos.create('five')
  api.todos.toggle(id, true)

  return {
    store,
    component: <AppComponent store={store} />
  }
}

export {
  createApp,
}
