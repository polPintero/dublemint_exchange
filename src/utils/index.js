export function getNumbersFromString(value) {
  const reg = /[0-9]{1,}/gi
  const result = value.toString().match(reg)
  return result ? Number(result.join('')) : null
}
