const convertToCelsius = function (fahT) {
  let celTemp = Math.round((fahT - 32) * (5 / 9) * 10) / 10;
  return celTemp;
};

const convertToFahrenheit = function (celT) {
  let fahTemp = Math.round((celT * (9 / 5) + 32) * 10) / 10;
  return fahTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
