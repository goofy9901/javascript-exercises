const add = function (num1, num2) {
  let sum = num1 + num2;
  return sum;
};

const subtract = function (num1, num2) {
  let sub = num1 - num2;
  return sub;
};

const sum = function (arr) {
  let sumArr = 0;
  for (let i = 0; i < arr.length; i++) {
    sumArr = sumArr + arr[i];
  }
  return sumArr;
};

const multiply = function (arr) {
  let mulArr = 1;
  for (let i = 0; i < arr.length; i++) {
    mulArr = mulArr * arr[i];
  }
  return mulArr;
};

const power = function (base, exponent) {
  let powArr = 1;
  for (let i = 0; i < exponent; i++) {
    powArr = powArr * base;
  }
  return powArr;
};

const factorial = function (n) {
  let factNum = 1;
  for (let i = n; i >= 1; i--) {
    factNum = factNum * i;
  }
  return factNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
