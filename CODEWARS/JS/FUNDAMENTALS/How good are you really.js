function betterThanAverage(classPoints, yourPoints) {
    let classSumm = 0
    classPoints.forEach(point => classSumm += point)
    return classSumm / classPoints.length > yourPoints ? false : true
}