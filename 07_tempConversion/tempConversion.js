const convertToCelsius = function(value) {
  let celcius = (value - 32) * .5556;
  return Math.round(celcius * 10) / 10
};

const convertToFahrenheit = function(degree) {
  let far = (degree * 1.8) + 32;
  return Math.round(far * 10) / 10
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
