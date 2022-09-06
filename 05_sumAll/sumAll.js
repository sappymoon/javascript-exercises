const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 < 0){
        return 'ERROR';
    }

    if (typeof num1 == 'string' || typeof num2 == 'string'){
        return 'ERROR';
    }

    if (Array.isArray(num1) || Array.isArray(num2)){
        return 'ERROR';
    }

    let firstNumber = 0;
    let lastNumber = 0;

    if (num1 > num2){
        firstNumber = num2;
        lastNumber = num1;
    }
    else {
        lastNumber = num2;
        firstNumber = num1;
    }

    let sum = 0;
    let temp = 0;

    for (x = firstNumber; x <= lastNumber; x++){
        temp = x;
        sum = temp + sum;
    }

    return sum;

};

sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;


// npm test sumAll.spec.js
