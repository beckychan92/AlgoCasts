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

function reverse4(str) {
    var reversed = '';
    for(var char of str) {
        reversed = char + reversed;
    }
    return reversed
}

function reverse5(str) {
    var result = '';
	str = str.split('')
    while(str.length > 0) {
        result += str.splice(str.length -1)
    }
    return result;
}

function reverse(str) {
    return str.split('').reduce((reversed, char) => {
        return char + reversed;
    }, '')
}

  
console.log(reverse('abcd') === 'dcba');
console.log(reverse('  abcd') === 'dcba  ');




module.exports = reverse;