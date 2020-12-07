const Input = require('./input.js');
const inputArray = Input.split('\n').map(string => +string);

// Finding product of the two numbers in a list that sum to 2020

/*
function find2020() {
  for (i = 0; i < inputArray.length; i++) {
    for (j = 0; j < inputArray.length; j++) {
    	if (i == j) continue;
    	if (inputArray[i] + inputArray[j] == 2020) return inputArray[i] * inputArray[j];
    }
  }
}

console.log(find2020());
*/

// Finding the product of three numbers in a list that sum to 2020

// Using array methods

function find2020FromThree1() {
	for (let i = 0; i < inputArray.length; i++) {
		let newInputArray = [...inputArray];
		newInputArray.splice(i, 1);
		let notQuite2020 = newInputArray.filter(j => inputArray[i] + j < 2020);
		for (let k = 0; k < notQuite2020.length; k++) {
			let sumSoFar = inputArray[i] + notQuite2020[k];
			let almost2020 = [...notQuite2020];
			almost2020.splice(k, 1);
			almost2020.filter(l => sumSoFar + l == 2020);
			if (sumSoFar + almost2020[0] == 2020) {
				console.log(inputArray[i], notQuite2020[k], almost2020[0]);
				return inputArray[i] * notQuite2020[k] * almost2020[0];
			}
		}
	}
}

// Using nested loops

function find2020FromThree2() {
	for (let i = 0; i < inputArray.length; i++) {
		let newInputArray = [...inputArray];
		newInputArray.splice(i, 1);
		let notQuite2020 = newInputArray.filter(j => inputArray[i] + j < 2020);
		for (let k = 0; k < notQuite2020.length; k++) {
			for (let l = 0; l < notQuite2020.length; l++) {
				if (k == l) continue;
				if (inputArray[i] + notQuite2020[k] + notQuite2020[l] == 2020) {
					console.log(inputArray[i], notQuite2020[k], notQuite2020[l]);
					return inputArray[i] * notQuite2020[k] * notQuite2020[l];
				}
			}
		}
	}
}

console.time('Array methods');
console.log(find2020FromThree1());
console.timeEnd('Array methods')

console.time('Nested loops');
console.log(find2020FromThree2());
console.timeEnd('Nested loops');
