const reverseString = function(string) {
    let reversedString = '';

    for (let x = string.length - 1; x >= 0; x--){
        reversedString += string[x];
    }

    return reversedString;

};

reverseString('');

// Do not edit below this line
module.exports = reverseString;

//npm test reverseString.spec.js
