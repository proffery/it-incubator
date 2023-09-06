function findShort(s){
  const toArr = s.split(' ')
  let minLength = toArr[0].length
  toArr.forEach(word => word.length < minLength ? minLength = word.length : null)
  return minLength
}