import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
// import {createLogger} from 'redux-logger'
import ReduxThunk from 'redux-thunk'

// ::TODO:: Fix naming.
import {workspace} from './workspace'
import {lists} from './lists'
import {todos} from './todos'
import {order} from './order'
import {meta} from './meta'

const _createStore = () => {
  const reducer = combineReducers({
    workspace,
    lists,
    todos,
    order,
    meta,
  })
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const middleware = applyMiddleware(
    // createLogger({collapsed: true}),
    ReduxThunk
  )
  return createStore(reducer, composeEnhancers(middleware))
}

export default _createStore
