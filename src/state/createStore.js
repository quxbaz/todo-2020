import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import {createLogger} from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import {reducer as todosReducer} from './todos'

const _createStore = () => {
  const reducer = combineReducers({
    todos: todosReducer,
  })
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const middleware = applyMiddleware(
    // createLogger({collapsed: true}),
    ReduxThunk
  )
  return createStore(reducer, composeEnhancers(middleware))
}

export default _createStore
