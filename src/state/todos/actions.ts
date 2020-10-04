import ACTION_TYPES from '../ACTION_TYPES'
import {Action, ActionCreator} from '../types'

let id: string = '0'

const actions: Dict<ActionCreator> = {}

actions.create = (text: string) => ({
  type: ACTION_TYPES.TODOS_CREATE,
  payload: {
    id: (parseInt(id) + 1).toString(),
    text,
    timestamp: Date.now(),
  }
})

actions.remove = () => ({
  type: ACTION_TYPES.TODOS_REMOVE,
  payload: {id},
})

export {
  Action,
  ActionCreator,
}

export default actions
