const sumAll = function(start , finish) {
    let result = 0;
    if (!Number.isInteger(start) || !Number.isInteger(finish)) {
        return "ERROR";
    }
    if (start <0 || finish <0 )  {
        return "ERROR";
    } 
     if (start > finish) {
        for(i= start ; i >= finish ; i-- ) {
            result += i;
    }
} else {
for(i= start ; i <= finish ; i++ ) {
    result += i;
}
}
return result;
};

// Do not edit below this line
module.exports = sumAll;
