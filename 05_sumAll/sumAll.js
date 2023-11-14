const sumAll = function(intFirst = 0, intSecond = 0) {

    let intSum = 0;
    let intStart = 0
    let intEnd = 0

    if (!isNumber(intFirst)) return 'ERROR'
    if (!isNumber(intSecond)) return 'ERROR'
    if (intFirst < 0) return 'ERROR';
    if (intSecond < 0) return 'ERROR';

    intStart = intFirst < intSecond ? intFirst : intSecond;
    intEnd = intFirst < intSecond ? intSecond : intFirst;

    for(i = intStart; i <= intEnd; i++){
        intSum += i;
    }

    return intSum;

};

function isNumber(value){
    return typeof value === 'number';
}

// Do not edit below this line
module.exports = sumAll;
