import React from 'react'
import {createStore} from './state'
import {createZone} from '/toasts'
import AppComponent from './components/AppComponent'

// ::TEMP::
import {createToast} from '/toasts'
import {createApi} from './api'

function createApp () {

  createZone('toast-zone')

  const store = createStore()

  // ::TEMP::

  // createToast('toast-zone', {
  //   text: '"Design" moved to trash.',
  //   duration: 9999,
  // })

  const api = createApi(store.dispatch.bind(store))
  const list0 = api.lists.create({title: 'Cooking'})

  api.lists.create({title: 'Design'})
  api.lists.create({title: 'Programming'})
  api.lists.create({title: 'Gamedev'})
  api.lists.create({title: 'Marketing'})
  // api.lists.create({title: 'Making'})
  // api.lists.create({title: 'Outside'})
  // api.lists.create({title: 'Photography'})
  // api.lists.create({title: 'Project: Lathe'})
  // api.lists.create({title: 'Project: Milling Machine'})
  // api.lists.create({title: 'Remember'})
  // api.lists.create({title: 'Thoughts'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'AA Woodworking: New Project/Workshop Ideas Continued'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  // api.lists.create({title: 'Woodworking'})
  api.lists.create({title: 'ZZ Last'})

  api.lists.createNote(list0, {text: 'Table saw.', isDone: true})

  api.lists.createNote(list0, {text: 'Drafting table.', isDone: true})
  api.lists.createNote(list0, {text: 'Shelving.', isDone: true})
  api.lists.createNote(list0, {text: 'Precision grinding table.', isDone: true})
  api.lists.createNote(list0, {text: 'Router table.', isDone: true})
  api.lists.createNote(list0, {text: 'Horizontal drill.'})
  api.lists.createNote(list0, {text: '($) Tensioned strop.'})
  api.lists.createNote(list0, {text: 'Stone holder.'})
  api.lists.createNote(list0, {text: '(H) Mochi press.'})
  api.lists.createNote(list0, {text: 'New hand plane.'})
  api.lists.createNote(list0, {text: 'Tortilla press.'})

  api.workspace.setActiveList(list0)

  // ::END TEMP::

  window.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'ArrowUp') {
      event.preventDefault()
      api.workspace.cyclePrevList()
    } else if (event.ctrlKey && event.key === 'ArrowDown') {
      event.preventDefault()
      api.workspace.cycleNextList()
    }
  })

  return {
    store,
    component: <AppComponent store={store} />
  }

}

export {
  createApp,
}
