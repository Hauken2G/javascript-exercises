const reverseString = function(string = '123! abc! Hello, Odinite.') {
    result = "";
    for (i = string.length-1; i >= 0 ; i--){
        result += string[i];
    } return result;
};

// Do not edit below this line
module.exports = reverseString;
