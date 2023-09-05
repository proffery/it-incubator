function grow(x){
    let mult = 1
    x.forEach(num => mult *= num)
    return mult
}