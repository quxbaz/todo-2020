/*
   Memoizes a selector by checking for equivalence with previous
   arguments. For ths to work, you should provide the most specific
   state possible as opposed to passing in the entire Redux state.
*/
const memoize = (selector) => {
  let memoized
  let prevArgs = []
  const isEqualToPrev = (args) => args.every((arg, i) => arg === prevArgs[i])
  return (...args) => {
    if (memoized == null || !isEqualToPrev(args)) {
      memoized = selector(...args)
      prevArgs = args
    }
    return memoized
  }
}

// // Not tested. Add cache-size property.
// const memoizeWithIndex = (index, selector) => {
//   const cache = {}
//   return () => {
//     if (cache[index] == null)
//       cache[index] = memoize(selector)
//     return cache[index]()
//   }
// }

export {
  memoize,
}
