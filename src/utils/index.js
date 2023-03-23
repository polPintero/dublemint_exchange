export function getNumbersFromString (value) {
  const reg = /[0-9]{1,}/gi
  const result = value.toString().match(reg)
  return result ? Number(result.join('')) : null
}

export function splitArrOnSmallArr (target, size = 3) {
  const workArr = target.map((i) => i)
  const result = []
  while (workArr.length) result.push(workArr.splice(0, size))
  return result
}
