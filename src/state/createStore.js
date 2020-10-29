import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import ReduxThunk from 'redux-thunk'
import {history} from './history'
import {workspace} from './workspace'
import {lists} from './lists'
import {notes} from './notes'

const _createStore = () => {
  const reducer = combineReducers({
    history,
    workspace,
    lists,
    notes,
  })
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const middleware = applyMiddleware(
    ReduxThunk
  )
  return createStore(reducer, composeEnhancers(middleware))
}

export default _createStore
