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

  // const note0 = api.notes.create({text: 'zero'})
  // const note1 = api.notes.create({text: 'one'})
  // api.notes.toggle(note1, true)
  // const note2 = api.notes.create({text: 'two'})

  // const note3 = api.notes.create({text: 'three'})
  // const note4 = api.notes.create({text: 'four'})
  // const note5 = api.notes.create({text: 'five'})

  // api.notes.toggle(note1, true)
  // api.notes.toggle(note3, true)

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
