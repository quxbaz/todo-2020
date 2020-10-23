import React from 'react'
import {createStore} from './state'
import {createApi} from '/api'
import {createZone} from '/toasts'
import AppComponent from './components/AppComponent'

// ::TEST::
import useNormalDataset from '/test/data/useNormalDataset'

function createApp () {

  createZone('toast-zone')
  const store = createStore()
  const api = createApi(store.dispatch)
  window.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'ArrowUp') {
      event.preventDefault()
      api.workspace.cyclePrevList()
    } else if (event.ctrlKey && event.key === 'ArrowDown') {
      event.preventDefault()
      api.workspace.cycleNextList()
    }
  })

  // ::TEST::
  useNormalDataset(store)
  // ::END TEST::

  return {
    store,
    component: <AppComponent store={store} />
  }

}

export {
  createApp,
}
