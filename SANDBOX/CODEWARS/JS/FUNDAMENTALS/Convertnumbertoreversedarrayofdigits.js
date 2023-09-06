function digitize(n) {
  const arr = n.toString().split('')
  let revArr = new Array(arr.length)
    for (let i = arr.length; i > 0; i--) {
      revArr[arr.length - i] = parseInt(arr[i - 1])
    }
  return revArr
}