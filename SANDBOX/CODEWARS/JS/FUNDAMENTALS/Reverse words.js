function reverseWords(str) {
  const toArr = str.split(' ')
  
  function solution(word) {
    let strArr = word.split('')
    let revArr = new Array(word.length)
    for (let i = word.length; i > 0; i--) {
      revArr[strArr.length - i] = strArr[i - 1]
    }
    return revArr.join('')
  }
  let newArr = []
  toArr.forEach(word => newArr.push(solution(word)))
  return newArr.join(' ')
}