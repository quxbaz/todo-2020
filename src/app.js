import React from 'react'
import {createStore} from './state'
import AppComponent from './components/AppComponent'

// ::TEMP::
import {createApi} from './api'

function createApp () {
  const store = createStore()

  // ::TEMP::

  const api = createApi(store.dispatch)

  const list0 = api.lists.create({title: 'zero-list'})
  const list1 = api.lists.create({title: 'one-list'})

  // const todo0 = api.todos.create({text: 'zero'})
  // const todo1 = api.todos.create({text: 'one'})
  // api.todos.toggle(todo1, true)
  // const todo2 = api.todos.create({text: 'two'})

  // const todo3 = api.todos.create({text: 'three'})
  // const todo4 = api.todos.create({text: 'four'})
  // const todo5 = api.todos.create({text: 'five'})

  // api.todos.toggle(todo1, true)
  // api.todos.toggle(todo3, true)

  // ::END TEMP::

  return {
    store,
    component: <AppComponent store={store} />
  }
}

export {
  createApp,
}
