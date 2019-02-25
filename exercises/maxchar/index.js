// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar1(str) {
    var hash = {};
    str.split('').forEach((char) => hash[char] ? hash[char]++ : hash[char] = 1)
    var char, count = 0;
    for(var key in hash) {
        if(hash[key] > count) {
            count = hash[key];
            char = key;
        }
    }
    return char
}

function maxChar(str) {
    var hash = {};
    var char, count = 0;
    for(var key of str) {
        if(hash[key]) {
            hash[key]++;
        } else {
            hash[key] = 1
        }
    }
    for(var key in hash) {
        if(hash[key] > count) {
            count = hash[key];
            char = key
        }
    }
    return char;
}


// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
console.log(maxChar("abcccccccd"))
console.log(maxChar("apple 1231111"))
console.log(maxChar(""))
module.exports = maxChar;
