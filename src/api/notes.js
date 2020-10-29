import {actions} from 'state/notes'

const createApi = (dispatch, api) => ({

  update (id, state) {
    dispatch(actions.update(id, state))
  },

})

export default createApi
