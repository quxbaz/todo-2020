import {applyMiddleware, combineReducers, createStore, Store} from 'redux'
// import {createLogger} from 'redux-logger'
import {reducer as todosReducer} from './todos'

function _createStore (): Store {
  const reducer = combineReducers({
    todos: todosReducer,
  })
  return createStore(reducer)
  // const middleware = applyMiddleware(
  //   createLogger({collapsed: true})
  // )
  // return createStore(reducer, middleware)
}

export default _createStore
