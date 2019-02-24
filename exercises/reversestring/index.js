// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse1(str) {
    return str.split('').reverse().join('');
}

function reverse2(str) {
    var strArr = str.split('');
    var newStr = '';
    for(var i = strArr.length - 1; i >= 0 ; i--){
        newStr += strArr[i];
    }
    return newStr;
}

function reverse3(str) {
    var newStr = [];
    str = str.split('')
    str.map(char => { newStr.unshift(char) })
    return newStr.join('')
}


  
console.log(reverse('abcd') === 'dcba');
console.log(reverse('  abcd') === 'dcba  ');




module.exports = reverse;