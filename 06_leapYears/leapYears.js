const leapYears = function(intYear) {

    let boolLeapYear = false;

    const DIVIDE_BY_100 = 100;
    const DIVIDE_BY_400 = 400;
    const DIVIDE_BY_4 = 4;

    if(!Number.isInteger(intYear)) return 'ERROR';

    //YES: intYear % 4 = 0
    //NOT: intYear % 100 = 0 && intYear % 400 = 0

    if (intYear % DIVIDE_BY_100 == 0) {
        if (intYear % DIVIDE_BY_400 == 0)
            boolLeapYear = true; 
    }else if(intYear % DIVIDE_BY_4 == 0){
        boolLeapYear = true;
    }

    return boolLeapYear;

};

// Do not edit below this line
module.exports = leapYears;
