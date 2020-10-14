import React from 'react'
import {createStore} from './state'
import AppComponent from './components/AppComponent'

// ::TEMP::
import {createApi} from './api'

function createApp () {
  const store = createStore()

  // ::TODO::TEMP::

  const api = createApi(store.dispatch.bind(store))
  const list0 = api.lists.create({title: 'Cooking'})
  const list1 = api.lists.create({title: 'Design'})
  const list2 = api.lists.create({title: 'Programming'})
  const list3 = api.lists.create({title: 'Gamedev'})
  api.lists.create({title: 'Marketing'})
  api.lists.create({title: 'Making'})
  api.lists.create({title: 'Outside'})
  api.lists.create({title: 'Photography'})
  api.lists.create({title: 'Project: Lathe'})
  api.lists.create({title: 'Project: Milling Machine'})
  api.lists.create({title: 'Remember'})
  api.lists.create({title: 'Thoughts'})
  api.lists.create({title: 'Woodworking'})
  api.lists.createNote(list1, {text: 'one'})
  api.lists.createNote(list1, {text: 'two'})
  api.lists.createNote(list1, {text: 'three'})

  api.workspace.setActiveList(list1)

  window.addEventListener('keydown', ({keyCode}) => {
    if (keyCode === 33 /* PAGE UP*/)
      api.workspace.cyclePrevList()
    else if (keyCode === 34 /* PAGE DPOWN*/)
      api.workspace.cycleNextList()
  })

  // ::END TEMP::

  return {
    store,
    component: <AppComponent store={store} />
  }
}

export {
  createApp,
}
