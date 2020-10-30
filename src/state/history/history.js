import ACTION_TYPES from 'state/ACTION_TYPES'

const init = {
  url: '',
}

const history = (state=init, action) => {

  if (action.type === ACTION_TYPES.HISTORY__SET_URL) {
    const {url} = action.payload
    return {...state, url}
  }

  return state

}

export default history
