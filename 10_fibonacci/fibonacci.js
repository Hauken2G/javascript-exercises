const fibonacci = function(num) {
    let fibArray = [0,1];
    let result = 0;
    let i = 0;
   if (typeof num === "string") {
     num = parseInt(num);
   } else {
     num;
   }
 if (num<0) {
    return "OOPS";
} else {
    for (i=2 ; i<= num ; i++) {
    fibArray[i] = fibArray[i-1] + fibArray[i-2]; 
    }  
}
    return fibArray[num]; 
}





// Do not edit below this line
module.exports = fibonacci;
