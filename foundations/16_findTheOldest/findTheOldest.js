const findTheOldest = function (arr) {
  return arr.reduce(function (best, current) {
    const bestAge =
      (best.yearOfDeath || new Date().getFullYear()) - best.yearOfBirth;

    const currentAge =
      (current.yearOfDeath || new Date().getFullYear()) - current.yearOfBirth;

    if (currentAge > bestAge) {
      return current;
    } else {
      return best;
    }
  });
};

// Do not edit below this line
module.exports = findTheOldest;
