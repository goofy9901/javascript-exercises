const repeatString = function (string, num) {
  let result = "";
  if (num < 0) {
    return "ERROR";
  }
  for (let i = 0; i < num; i++) {
    result += string;
  }
  return result;
};
repeatString("hey", 10);
repeatString("hey", 1);
repeatString("hey", 0);

// Do not edit below this line
module.exports = repeatString;
