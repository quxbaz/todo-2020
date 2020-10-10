import {uniqId} from '/util'
import ACTION_TYPES from '/state/ACTION_TYPES'

const actions = {}

actions.create = ({title}) => ({
  type: ACTION_TYPES.LISTS__CREATE,
  payload: {
    id: uniqId(),
    title,
  },
})

export default actions