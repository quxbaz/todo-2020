import ACTION_TYPES from './ACTION_TYPES'

type Action = {
  type: ACTION_TYPES,
  payload: Dict<any>,
}

type ActionCreator = (...args: any[]) => Action

type Reducer = (state: Dict<any> | undefined, action: Action) => Dict<any>

export {
  Action,
  ActionCreator,
  Reducer,
}
