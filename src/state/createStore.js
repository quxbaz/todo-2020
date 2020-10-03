import {applyMiddleware, combineReducers, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import {reducer as todosReducer} from './todos'

export default function () {
  const reducer = combineReducers({
    todos: todosReducer,
  })
  const middleware = applyMiddleware(
    createLogger({collapsed: true})
  )
  return createStore(reducer, middleware)
}
