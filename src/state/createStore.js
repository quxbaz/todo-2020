import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import {createLogger} from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import {reducer as todosReducer} from './todos'
import {reducer as orderReducer} from './order'
import {reducer as metaReducer} from './meta'

const _createStore = () => {
  const reducer = combineReducers({
    todos: todosReducer,
    order: orderReducer,
    meta: metaReducer,
  })
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const middleware = applyMiddleware(
    // createLogger({collapsed: true}),
    ReduxThunk
  )
  return createStore(reducer, composeEnhancers(middleware))
}

export default _createStore
