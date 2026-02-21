const sumAll = function (first, second) {
  let sum = 0;
  let start = Math.min(first, second);
  let end = Math.max(first, second);
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  if (!Number.isInteger(first) || !Number.isInteger(second)) return "ERROR";
  if (start < 0 || end < 0) {
    return "ERROR";
  }
  if (start % 1 !== 0 || end % 1 !== 0) {
    return "ERROR";
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
