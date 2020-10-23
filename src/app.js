import React from 'react'
import {createStore} from './state'
import {createZone} from '/toasts'
import AppComponent from './components/AppComponent'

// ::TEST::
import createNormalDataset from '/test/data/createNormalDataset'

function createApp () {

  createZone('toast-zone')
  const store = createStore()
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
  createNormalDataset(store)
  // ::END TEST::

  return {
    store,
    component: <AppComponent store={store} />
  }

}

export {
  createApp,
}
