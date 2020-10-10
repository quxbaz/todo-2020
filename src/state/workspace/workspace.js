import ACTION_TYPES from '/state/ACTION_TYPES'

const init = {
  activeList: null,
}

const workspace = (state=init, action) => {

  // ::TODO::MIDDLEWARE::
  if (action.payload == null) {
    action = {...action, payload: {}}
  }
  if (action.meta == null) {
    action = {...action, meta: {}}
  }
  //

  const {id} = action.payload

  switch (action.type) {
    case ACTION_TYPES.WORKSPACE__SET_ACTIVE_LIST:
      return {
        ...state,
        activeList: id,
      }
    default:
      return state
  }

}

export default workspace
