import React from 'react'
import {createStore} from './state'
import AppComponent from './AppComponent'

function createApp () {
  const store = createStore()
  return {
    store,
    component: <AppComponent store={store} />
  }
}

export {
  createApp,
}
