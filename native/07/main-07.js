//1. Реализуйте функцию, которая принимает параметром подстроку, число повторов и разделитель,
// а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// repeatString("yo", 3, ", ") => "yo, yo, yo"
// repeatString("yo", 0, ", ") => ""
// repeatString("yo", 1, ", ") => "yo"

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку,
// а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов),
// а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении,
// если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи.") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null
// getMinLengthWord(true) => null
// getMinLengthWord(undefined) => null

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

// 1:
const repeatString = (string, repeatNum, divider) =>  
string.concat(divider)
.repeat(repeatNum)
.split('')
.reverse()
.join('')
.replace(divider.split('').reverse().join(''), '')
.split('')
.reverse()
.join('')

// console.log(repeatString("yo", 3, " "))
// console.log(repeatString("yo", 3, ","))
// console.log(repeatString("yo", 3, ", "))
// console.log(repeatString("yo", 0, ", "))
// console.log(repeatString("yo", 1, ", "))


// 2:
const checkStart = (string, subString) => {
  return string.toLowerCase().startsWith(subString.toLowerCase())
}
// console.log(checkStart("Incubator", "inc"))
// console.log(checkStart("Incubator", "yo"))

// 3:
const truncateString = (string, cutNum) => string.slice(0, cutNum) + '...'

// console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

// 4:
const getMinLengthWord = (string) => {
  if (typeof string !== 'string' || string.length === 0) {
    return null
  } else {
    let minLengthIndex = 0
    const stringArr = string.split(' ')
    stringArr.forEach((word, index) =>
      word.length < stringArr[minLengthIndex].length
        ? (minLengthIndex = index)
        : null
    )
    return stringArr[minLengthIndex]
  }
}
// console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))
// console.log(getMinLengthWord(""))
// console.log(getMinLengthWord(123))
// console.log(getMinLengthWord(true))
// console.log(getMinLengthWord(undefined))

// 5:
const setUpperCase = (string) => {
  return string
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join(" ")
}
// console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))

// 6:
const isIncludes = (string, subString) => {
    const truthTable = subString
    .toLowerCase()
    .split("")
    .map(char => string.toLowerCase().includes(char))
  
    for (let i = 0; i < truthTable.length; i++) {
        if (!truthTable[i]) return false
    }
    return true
}
// console.log(isIncludes("Incubator", "Cut"))
// console.log(isIncludes("Incubator", "table"))
// console.log(isIncludes("Incubator", "inbba"))
// console.log(isIncludes("Incubator", "inba"))
// console.log(isIncludes("Incubator", "Incubatorrr"))
