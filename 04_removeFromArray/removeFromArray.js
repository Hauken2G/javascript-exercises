const removeFromArray = function(arr=["hey", 2, 3, "ho"]) {
let result = [];
for (i=0; i< arr.length; i++) {
    if (arr[i] !== 3 && arr[i] === "1"){
     result.push(arr[i]);
    }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
