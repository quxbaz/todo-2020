import {chain} from 'qux'
import {memoize} from '../state-util'

const isAlive = (list) => list.isAlive

export const getSortedLists = memoize((lists, cond=isAlive) => (
  chain(lists)
    .values()
    .filter(cond)
    .sortBy('title')
    .get()
))

export const isListActive = (state, id) => state.history.url === `/lists/${id}`
