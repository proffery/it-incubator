// Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".
function isPalindrome(word) {
    let reverseWord;
    let cleanWord = word.replaceAll(" ","").replaceAll("!","").replaceAll(",","").replaceAll(".","").toLowerCase();
    let cleanWordToArr = cleanWord.split('');
    let reverseArr = new Array (cleanWordToArr.length);
    for (i = cleanWordToArr.length; i > 0; i--) {
        reverseArr[cleanWordToArr.length - i] = cleanWordToArr[i - 1];
    }
    reverseWord = reverseArr.join('');
    
    if (reverseWord === cleanWord) {
        return true;
    }
    return false;
}