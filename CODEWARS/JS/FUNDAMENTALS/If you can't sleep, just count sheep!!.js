var countSheep = function (num){
  let sheeps = ''
  for(let i = 1; i <= num; i++) {
    sheeps += `${i} sheep...`
  }
  return sheeps
}