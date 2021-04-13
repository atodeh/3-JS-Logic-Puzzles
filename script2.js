/******************************************************************Logic Challenge #2********************************************************************/
const test3 = [1,4,591,392,391,2,5,10,2,13,20,48,0]; //first array to test our function
const test4 = [1,2,3,4]; //second array to test our function

/*this function will check if 2 values in the passed array can be added to achieve the target number passed.
Rather than ending the program when two values are found, the function below will sweep through the entire array,
and will output all values that when added together, equate to the target value*/
function targetAnswer(array, taregetNumber) {
	var num1; //holds first checked value in array
	var num2; //holds second checked value in array
	let firstCounter = 0; //holds first index
	let secondCounter = firstCounter + 1; //holds second index
	const length = array.length; //length of array to sweep through each index of array
	let flag = true; //boolean flag to end program when array has been checked
	//we will loop through the array until we have checked all values
	while (flag === true) {
	for (var i = 0; i < length - 1; i++) {
		num1 = array[firstCounter];
		num2 = array[secondCounter];
		let sum = num1 + num2; //adds two different values in array 
		if (sum === taregetNumber) {
			console.log(`Yes, we found a pair! ${num1} + ${num2} = ${sum}!`);
		}
		secondCounter++;
		if (secondCounter === length) {
			firstCounter++;
			//breaks out of loop if array sweep has finished (below)
			if (firstCounter === length - 1) {
				flag = false;
			}
			secondCounter = firstCounter + 1;
		}
	}}
}
/*Test Examples*/
targetAnswer(test3, 595); //first test array pass through
targetAnswer(test4, 5); //second test array pass through
