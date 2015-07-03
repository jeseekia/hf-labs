function convertToCelsius(tempFarenheit){
  var tempCelsius = (tempFarenheit - 32)*(5/9);
  console.log(tempCelsius);
  return tempCelsius;
};
// alert("hi");
convertToCelsius(45);

function convertToFarenheit(tempCelsius){
  var tempFarenheit = tempCelsius*(9/5)+32;
  console.log(tempFarenheit);
  return tempFarenheit;
};

function convertTemperature(temp,scale) {
  var lowerCaseScale = scale.toLowerCase();
  switch(lowerCaseScale) {
    case 'celsius':
    convertToFarenheit(temp);
    break;

    case 'farenheit':
    convertToCelsius(temp);
    break;
  }
};

convertTemperature(55,'celsius');
convertToFarenheit(55);
convertTemperature(55,'Farenheit');
convertToCelsius(55);
