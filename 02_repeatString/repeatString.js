const repeatString = function(string, num) {
    let multipliedString = "";
    num = Math.floor(num);

    for ( let x = 0; x < num; x++){
            multipliedString = multipliedString.concat(string);
    }

    if (num < 0){
        multipliedString = "ERROR";
    }

    return multipliedString;
};

function randomNumber(){
    let randomNumber = Math.random() * 1000;

    return randomNumber;
}

repeatString("", randomNumber());

// Do not edit below this line
module.exports = repeatString;
