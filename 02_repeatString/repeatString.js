const repeatString = function(string= "hey" , num = (Math.random() * 1000)) {
let result = "";
for (i=0; i < num; i++) {
 result += string;
}
return result;
};

// Do not edit below this line
module.exports = repeatString;
