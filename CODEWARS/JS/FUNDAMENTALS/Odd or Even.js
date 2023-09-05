function oddOrEven(array) {
    if (array.length === 0) {
        return 'even'
    }
    else {
        let summ = 0
        array.forEach(num => summ += num)
        return summ % 2 === 0 ? 'even' : 'odd'
    }
}