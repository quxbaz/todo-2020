import React from 'react'
import {createStore} from './state'
import AppComponent from './components/AppComponent'

// ::TEMP::
import {createApi} from './api'

function createApp () {
  const store = createStore()

  // ::TODO::TEMP::

  const api = createApi(store.dispatch.bind(store))
  const list0 = api.lists.create({title: 'list-0'})
  const list1 = api.lists.create({title: 'list-1'})
  api.workspace.setActiveList(list0)

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

  // ::TODO::TEMP::
  window.addEventListener('keydown', ({keyCode}) => {
    if (keyCode === 33 /* PAGE UP*/)
      api.workspace.setActiveList(list0)
    else if (keyCode === 34 /* PAGE UP*/)
      api.workspace.setActiveList(list1)
  })

  return {
    store,
    component: <AppComponent store={store} />
  }
}

export {
  createApp,
}
