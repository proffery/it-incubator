function solution(str) {
    let strArr = str.split('')
    let revArr = new Array(str.length)
    for (let i = str.length; i > 0; i--) {
      revArr[strArr.length - i] = strArr[i - 1]
    }
    return revArr.join('')
  }