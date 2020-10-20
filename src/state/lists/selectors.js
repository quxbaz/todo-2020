import {chain} from '/util'

const getSortedLists = (state) => (
  chain(state.lists)
    .values()
    .filter(list => list.isAlive)
    .sortBy('title')
    .get()
)

export {
  getSortedLists,
}
