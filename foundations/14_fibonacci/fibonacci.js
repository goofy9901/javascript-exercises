const fibonacci = function (n) {
  n = Number(n);
  if (n < 0) {
    return "OOPS";
  }
  let number1 = 0;
  let number2 = 1;

  for (let i = 0; i < n; i++) {
    let currentNum = number1 + number2;
    number1 = number2;
    number2 = currentNum;
  }
  return number1;
};

// Do not edit below this line
module.exports = fibonacci;
