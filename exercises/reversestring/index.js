// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reverse().join('');
}

function reverse(str) {
    var strArr = str.split('');
    var newStr = '';
    for(var i = strArr.length - 1; i >= 0 ; i--){
        newStr += strArr[i];
    }
    return newStr;
}

module.exports = reverse;
  
console.log(reverse('abcd') === 'dcba');
console.log(reverse('  abcd') === 'dcba  ');