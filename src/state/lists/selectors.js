import {values, chain} from 'qux'

const _cond = (list) => list.isAlive

const getSortedLists = (state, cond=_cond) => (
  chain(state.lists)
    .values()
    .filter(cond)
    .sortBy('title')
    .get()
)

const isTrashEmpty = (state) => (
  !(values(state.lists).some(list => list.isAlive))
)

export {
  getSortedLists,
}
