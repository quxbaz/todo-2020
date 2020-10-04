function omit (dict: Dict<any>, key: string): Dict<any> {
  const newDict = {...dict}
  delete newDict[key]
  return newDict
}

function sortBy (list: any[], key: string): any[] {
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

function values (dict: Dict<any>): any[] {
  return Object.keys(dict).map(k => dict[k])
}

export {
  omit,
  sortBy,
  values,
}
