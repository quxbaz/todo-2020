import {values, chain} from 'qux'

const _cond = (list) => list.isAlive

const getSortedLists = (state, cond=_cond) => (
  chain(state.lists)
    .values()
    .filter(cond)
    .sortBy('title')
    .get()
)

const isListActive = (state, id) => state.history.url === `/lists/${id}`

export {
  getSortedLists,
  isListActive,
}
