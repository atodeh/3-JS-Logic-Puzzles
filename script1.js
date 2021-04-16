/******************************************************************Logic Challenge #1********************************************************************/
const test = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
//[[1,1,1,1],[2,2,2],4,5,10,[20,20],391,392,591]
const stringTest = [2, 1, "2", 1, "3", 2];
//[[1,1],[2,2],["2", "3"]]
const finalTest = [1,"2","3",2,1,"2","3",2,1,"2","3",2,5,6,5,9,14,87];
//[[1,1,1],[2,2,2],[5,5],6,9,14,87,["2","2","2","3","3","3"]]

//this is our main function that will sort our array to get the desired outcome
const cleanTheRoom = array => {
	array.sort((a, b) => a - b); //this will sort the passed array in order

	//we are creating a new array of just the numbers from the passed array
	const numArray = array.filter(item => typeof item === "number");
	//we are creating a new array of just the strings from the passed array
	const stringArray = array.filter(item => typeof item === "string");

	array = numArray; //assigning the number array to passed "array"

	var finalArray = []; //this finalArray is what our cleanTheRoom function will eventually return
	var tempArray = []; //will hold any values that repeat
	var placeHolder = array[0];

	//we are just checking the first and second value in the passed array to start off
	if (array[0] === array[1]) {
		tempArray.push(array[0]);
	} else {
		finalArray.push(array[0]);
	}
	//we are simply checking through each element for matching values
	for (var x = 1; x < array.length; x++) { 
		if (placeHolder === array[x]) {
			tempArray.push(array[x]);
		} else {
			if (tempArray.length > 0) {
				finalArray.push(tempArray); //pushing array of matched values
				tempArray = []; //clearing tempArray once it is pushed
			}
		if (array[x] !== array[x + 1] && array.length > x + 1) {
			finalArray.push(array[x]);
		} else if (array[x] === array[x + 1] && array.length > x + 1) {
			tempArray.push(array[x]);
		} else {
			finalArray.push(array[x]);
		}
		placeHolder = array [x];
		} //end of else statement
		} //end of for loop

	//adding matching values if they appear at the end of the array
	if (tempArray.length > 0) {
		finalArray.push(tempArray);
	}
	//adding string array into the final array, if string array exists
	if (stringArray.length > 0) {
		finalArray.push(stringArray);
	} 

	return finalArray; 
}

/*Test Examples*/
console.log(cleanTheRoom(test)); //first test array pass through
console.log(cleanTheRoom(stringTest)); //string test array pass through
console.log(cleanTheRoom(finalTest)); //final test array pass through

