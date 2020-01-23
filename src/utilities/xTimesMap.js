const history = new Map()

export const xTimesMap = (x, fn) => {
  const existing = history.get(x)
  const array = existing || Array(x).fill(undefined)
  !existing && history.set(x, array)
  return array.map(fn)
}
