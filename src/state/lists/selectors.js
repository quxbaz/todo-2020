import {chain} from '/util'

const _cond = (list) => list.isAlive

const getSortedLists = (state, cond=_cond) => (
  chain(state.lists)
    .values()
    .filter(cond)
    .sortBy('title')
    .get()
)

export {
  getSortedLists,
}
