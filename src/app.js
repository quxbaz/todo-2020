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
  api.lists.createNote(list1, {text: 'one'})
  api.lists.createNote(list1, {text: 'two'})
  api.lists.createNote(list1, {text: 'three'})

  api.workspace.setActiveList(list1)


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
