/******************************************************************Logic Challenge #3********************************************************************/
//this function will convert RGB values into hex values
const convertRgbToHex = (r, g, b) => {
//we are putting the 3 passed values into an array, and then mapping through them
	return '#' + [r, g, b].map(item => {
//we are converting each item in the array into a hexadecimal value below using toString method
  		const hexNumber = item.toString(16); //radix parameter is 16 for hex
  		const hexNUmberLength = hexNumber.length; //length of hex number after conversion from number
  		if (length === 1) {
  			return '0' + hexNumber; //in case number happens to be 0
  		} else {
  			return hexNumber;
  		}
}).join('')}; //join method will replace "," between each of the 3 values with an empty string 

console.log(convertRgbToHex(192,192,192)); // Test case #1:'#C0C0C0'
console.log(convertRgbToHex(255,127,80)); // Test case #2:'#FF7F50'

//this function will convert hex values into RGB values
const convertHexToRgb = (hexNumber) => {
	const regexValue = /^#?([a-f\digit])([a-f\digit])([a-f\digit])$/i; //regex to search for a pattern
	//searches for '#' in the string, then searches for a letter between a-f, and then a digit. (3x)
	//the i at the end makes it case - insensitive
	return hexNumber.replace(regexValue,(m, r, g, b) => '#' + r + r + g + g + b + b).substring(1).match(/.{2}/g).map(item => {
    	return parseInt(item, 16); //radix parameter is 16 for hex
    });
}

console.log(convertHexToRgb("#BDB76B")); //Test case #1: (189,183,107)
console.log(convertHexToRgb("#AFEEEE")); //Test case #2: (175,238,238)

let userInput = prompt("Enter either a hex value to convert it to RGB, or enter an RGB value to convert it to hex");
let userResult;
if (userInput.includes('#')) {
	userResult = convertHexToRgb(userInput);
} else {
	userInput = userInput.split(",");
	let r = Number(userInput[0]);
	let g = Number(userInput[1]);
	let b = Number(userInput[2]);
	userResult = convertRgbToHex(r, g, b);
}

alert(`${userInput} equates to ${userResult}`); //showing the user the conversion