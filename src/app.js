import React from 'react'
import {createStore} from './state'
import {createApi} from 'api'
import AppComponent from './components/AppComponent'

// ::TEST::
import useNormalDataset from 'test/data/useNormalDataset'

function createApp () {

  const store = createStore()
  const api = createApi(store.dispatch)

  if (process.env.NODE_ENV === 'development')
    window.api = api

  // Set the store url value to the browser url.
  api.history.setUrl(location.pathname)

  // ::TEST::
  useNormalDataset(api)
  // ::END TEST::

  return <AppComponent {...{store, api}} />

}

export {
  createApp,
}
