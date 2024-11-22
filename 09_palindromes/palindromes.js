
const palindromes = function (string) {
    let cleanString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let  paliWord = "";
for (i = cleanString.length-1; i>=0; i--){
 paliWord += cleanString[i];
}
if (paliWord === cleanString){
    return true;
} else {
    return false;
}
};
// Do not edit below this line
module.exports = palindromes;
