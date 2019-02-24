// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome1(str) {
    var reversed = str.split('').reverse().join('')
    return str === reversed

}

function palindrome(str) {
    var reversed = str.split('').reduce((word, char) => char + word , '')
    return reversed === str
}





console.log(palindrome('aba') === true)
console.log(palindrome(' aba') === false)
console.log(palindrome('1000000001') === true)
console.log(palindrome('aba ') === false)
console.log(palindrome('greetings') === false)
console.log(palindrome('Fish hsif') === false)
console.log(palindrome('pennep') === true)


module.exports = palindrome;
