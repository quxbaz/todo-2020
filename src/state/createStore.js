import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import ReduxThunk from 'redux-thunk'

// ::TODO:: Fix naming.
import {workspace} from './workspace'
import {lists} from './lists'
import {notes} from './notes'
import {notesMeta} from './notesMeta'

const _createStore = () => {
  const reducer = combineReducers({
    workspace,
    lists,
    notes,
    notesMeta,
  })
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const middleware = applyMiddleware(
    ReduxThunk
  )
  return createStore(reducer, composeEnhancers(middleware))
}

export default _createStore
