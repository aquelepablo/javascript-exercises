const convertToCelsius = function(tempFahrenheit) {
  
  let tempCelsius = 0;

  tempCelsius = (tempFahrenheit - 32) * (5/9);
  tempCelsius = parseFloat(tempCelsius.toFixed(1));

  console.log(tempFahrenheit + 'ºF' + ' - ' + tempCelsius + 'ºC')
  return tempCelsius;
};

const convertToFahrenheit = function(tempCelsius) {

  let tempFahrenheit = 0;

  tempFahrenheit = (tempCelsius * (9/5) + 32);
  tempFahrenheit = parseFloat(tempFahrenheit.toFixed(1));
  
  console.log(tempFahrenheit + 'ºF' + ' - ' + tempCelsius + 'ºC')

  return tempFahrenheit;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
