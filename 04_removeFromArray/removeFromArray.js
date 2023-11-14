const removeFromArray = function(...args) {

    if (!Array.isArray(args[0])) return 'ERROR';

    let arrOriginal = args[0];

    for(i = 1; i <= args.length - 1; i++){
        let intIndex = arrOriginal.findIndex((value) => {
            return value === args[i];
        })

        if(intIndex > -1) {            
            arrOriginal.splice(intIndex, 1);
        }
    }

    return arrOriginal;
};

// Do not edit below this line
module.exports = removeFromArray;
