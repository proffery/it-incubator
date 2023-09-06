function lovefunc(flower1, flower2){
    const isFlowerOdd = (flower) => flower % 2 === 0 ? false : true
    return isFlowerOdd(flower1) && !isFlowerOdd(flower2) ? true : !isFlowerOdd(flower1) && isFlowerOdd(flower2) ? true : false
}