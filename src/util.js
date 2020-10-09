function omit (obj, key) {
  const newObj = {...obj}
  delete newObj[key]
  return newObj
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

const getState = (dispatch) => {
  let state = null
  dispatch((d, getState) => state = getState())
  return state
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

export {
  omit,
  sortBy,
  uniqId,
  values,
  getState,
  last,
  without,
}
