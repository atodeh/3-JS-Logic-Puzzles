/******************************************************************Logic Challenge #1********************************************************************/
const test = [1,2,4,591,44,392,391,2,5,10,2,1,1,1,20,20,44];
//[1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591]
//[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]
const test2 = [56,52,1,8,9,8,6,4,5,7,6,3,2,5,9,8,4,1];
//[1, 1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 8, 9, 9, 52, 56]
//[[1,1], 2, 3, [4,4], [5,5], [6,6], 7, [8,8,8], [9,9], 52, 56]
const stringTest = [1, "2", 1, "3", 2];
//[[1,1], 2, ["2", "3"]]

//this function sorts any given array numerically
const sortArray = (arrayFromAbove) => {
	return arrayFromAbove.sort(function(a, b) {
		return a - b;
	});	
}

//this function will extract all string values from passed array, and return in a new array
const stringArray = (array) => {
	array = array.filter(item => (typeof item === 'string'));
	return array;
}

//this function will return the final sorted array when called upon
const answer = (answerFromAbove) => {
	const newArray = sortArray(answerFromAbove); //calls sortArray function to sort any array passed through
	let isString = false;
	//check to see if passed array contains any string values
	newArray.forEach((item, index) => {
		if (typeof item === 'string') {
			isString = true;
		}
	})

//if the passed array does contain strings, we will call upon "stringArray" function to return array of strings
	if (isString === true) {
		var sArray = stringArray(newArray);
		const sArrayLength = sArray.length;
		for (var i = 0; i < newArray.length; i++) {
			if (typeof newArray[i] === 'string') {
				newArray[i] = false;
			}
		}
		for (var i = 0; i < sArrayLength; i++) {
			sArray[0] = [sArray[0]];
			for (var i = 1; i < sArrayLength; i++) {
				sArray[0].push(sArray[i]);
				sArray[i] = false;
		}}
	}//end of if-statement for "isString"

//map function to create a "finalArray" that will sort through equal number values, and place them in nested arrays
	let finalArray = newArray.map((item, index) => {
		const length = newArray.length; //length of array
		let placeHolder = newArray[index];; //holds first value of array we are checking
		if (newArray[index] === newArray[index + 1] && newArray[index] !== false) {
			newArray[index] = [newArray[index]]; //creating an array of same values
			for (var i = 1; i < length; i++) {
				if (placeHolder === newArray[i] && newArray[i] !== false) {
					newArray[index].push(newArray[i]);	
					newArray[i] = false;
				}	
			}
			return newArray[index]; //returns value to map function
		} else {
			return item; //returns value to map function
		}
	})

	//removing all false values in our array from above
	for (var i = 0; i < finalArray.length; i++) {
		if (finalArray[i] === false) {
			finalArray.splice(i, 1)
			i--;
		} 
	}
//will return the desired array below depending on if string condition was met or not
	if (isString) {
		sArray = answer(sArray); //removing false values
		return finalArray.concat(sArray);
	} else {
		return finalArray; //returns the final array to be displayed when this function is called
	}
}

/*Test Examples*/
console.log(answer(test)); //first test array pass through
console.log(answer(test2)); //second test array pass through
console.log(answer(stringTest)); //string test array pass through

