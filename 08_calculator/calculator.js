let numberOne = 4;
let numberTwo = 3;

const add = function(numberOne, numberTwo) {
	let sum = 0;
  sum = numberOne + numberTwo;
  return sum;
};

const subtract = function(numberOne, numberTwo) {
	let sub = 0;
  sub = numberOne - numberTwo;
  return sub;
};


const sum = function(anArray = [1, 3, 5, 7, 9]) {
  let summ = 0;
	anArray.forEach(value => {
    summ += value;
  });
  return summ;
};

const multiply = function(anArray = [2, 4, 6, 8, 10, 12, 14]) {
  let multi = 1;
	anArray.forEach(value => {
    multi *= value;
  });
  return multi;
};

const power = function(numberOne, numberTwo) {
	let power = 0;
  power = numberOne ** numberTwo;
  return power;
};

let n = 5;
const factorial = function(n) {
  let fact = 1;
  if (n<0) {
    return "The factorial of a negative number can not be defined";
  } else if (n===0) {
    return 1;
  } else {
for (i=1 ; i<= n; ++i) {
      fact *= i;
    } 
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
