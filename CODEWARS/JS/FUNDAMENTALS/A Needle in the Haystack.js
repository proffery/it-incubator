function findNeedle(haystack) {
    let position = 0
    haystack.map((stack, index) => stack === 'needle' ? position = index : null)
    return "found the needle at position " + position
}