const Input = require('./input.js');
const inputArray = Input.split('\n').map(string => +string);

function find2020() {
  for (i = 0; i < inputArray.length; i++) {
    for (j = 0; j < inputArray.length; j++) {
    	if (i == j) continue;
    	if (inputArray[i] + inputArray[j] == 2020) return inputArray[i] * inputArray[j];
    }
  }
}

console.log(find2020());
