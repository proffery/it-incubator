function positiveSum(arr) {
    let summ = 0
    const positiveArr = arr.filter(element => element > 0)
    positiveArr.forEach(element => summ += element)
    return summ
}