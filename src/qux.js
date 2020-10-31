function omit (obj, ...keys) {
  const copy = {...obj}
  keys.forEach(key => delete copy[key])
  return copy
}

function sortBy (list, key) {
  if (list.length === 0) {
    return []
  }
  const sorted = [...list].sort((a, b) => {
    if (a[key] < b[key]) {
      return -1
    } else if (a[key] > b[key]) {
      return 1
    }
    return 0
  })
  return sorted
}

const uniqId = (function () {
  let id = -1
  return () => {
    id++
    return id.toString()
  }
})()

function values (obj) {
  return Object.keys(obj).map(k => obj[k])
}

const last = (list) => list[list.length - 1]

const without = (array, ...values) => {
  const result = array.filter(
    (item) => !values.includes(item)
  )
  if (array.length === result.length)
    return array
  else
    return result
}

const insert = (array, item, i) => ([
  ...array.slice(0, i),
  item,
  ...array.slice(i),
])

const noop = () => {}

const splitAt = (x, i) => [x.slice(0, i), x.slice(i)]

const chain = (acc) => ({
  values: () => chain(values(acc)),
  map: (fn) => chain(acc.map(fn)),
  filter: (fn) => chain(acc.filter(fn)),
  sortBy: (key) => chain(sortBy(acc, key)),
  get: () => acc,
})

const getRandomItem = (list) => (
  list[Math.floor(Math.random() * list.length)]
)

export {
  omit,
  sortBy,
  uniqId,
  values,
  last,
  without,
  insert,
  noop,
  splitAt,
  chain,
  getRandomItem,
}
