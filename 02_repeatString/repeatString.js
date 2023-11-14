const repeatString = function( strValue, intValue) {
    
    if(intValue < 0) return 'ERROR';
    
    let strReturn = '';
    for(i = 0; i < intValue; i++){
        strReturn += strValue;
    }

    return strReturn;
};

// Do not edit below this line
module.exports = repeatString;
