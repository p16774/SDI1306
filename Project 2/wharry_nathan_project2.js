//alert("JavaScript works!");


//assign base variables

var oldCop = "Frank";
	newCop = "Max";
	serviceYears = 13;
	crimeList = ["burglar","murder","drug"];
	crimeTime = 1;
	grabItems = ["keys","hat","coat","gun","nightstick","sunglasses","pen","badge","umbrella","shoes"];
	optionOne = "2 assailants and 1 getaway driver";
	optionTwo = "3 assailants and no getaway driver";
	
	
//function for normal procedure
	
getServiceYears = function (calculate) {
	
	var oldYears = (calculate+12);
		
		console.log ("His partner " + oldCop + " had worked the beat for more than " + oldYears + " years.");
		
}


//function for boolean validation

getCrime = function (crime, time) {
	
	if (crime === "burglar" && time > 0) {
		
		return true;
		
	} else {
		
		return false;
		
	} //end validation check
	
} //end getCrime function


//function for number validation with while loop

getLicense = function (number) {
	
	var plateNumbers = new Array();
	
	while (number > 10000) {
		
		strNumber = number.toString(); //change our number into a string to manipulate
		
		//console.log(strNumber);
		
		if (strNumber.charAt(0) === "3" && strNumber.charAt(2) === "3" && strNumber.charAt(4) === "1" && strNumber.charAt(1) !== "3") {
			
			number = Number(strNumber); //return our string to a number
			plateNumbers.push(number); //add our valid number to the array
			number-- //remember to lower our number by 1
			
		} else {
			
			number = Number(strNumber); //do nothing but change our value back to a number type
			number-- //remember to lower our number by 1
			
		} //end the search statement
		
	} //end the while statement
	
	count = plateNumbers.length; //count the number of values returned
	count = (count / 10); //divide to lower our search values
		
	return count;
	
} //end getLicense function


//function for string validation

decideEvidence = function (first,second) {
	
	randomNumber = Math.floor(Math.random()*1000);

	isEven = function (number) {
		return (number%2 === 0) ? true : false;
	} //end even check function
	
	choice = isEven(randomNumber);
	
	if (choice === true) {
		
		return first;
		
	} else {
		
		return second;
		
	} //end if statement
	
} //end decideNextSteps function


//function for array validation
getItems = function (array, number) {
	
	randomNumber = Math.floor(Math.random()*number);
	
	//console.log(randomNumber + " this is before the function.");
	
	var actionItems = ["walking","jumping","skipping","running","sliding","whistling","humming","steping","strolling","hopping"];
	
	for (i=0; i < 10; i++) {
		
		if(i === randomNumber) {
			
			//console.log(randomNumber + " this is inside the function.");
			itemUsed = array[randomNumber];
			actionCar = actionItems[randomNumber];
			
			ending = oldCop + " grabbed his " + itemUsed + " as " + newCop + " picked up the addresses before " + actionCar + " to the car.";
			
			return ending;
			
		} //end the if statement
		
	} //end for loop
	
} //end getItems function

//put the story together
console.log(newCop + " was the newest cop on the force. After 13 years working traffic, he was finally promoted to detective.");

getServiceYears(serviceYears);

caseAssigned = getCrime(crimeList[0],crimeTime);

if (caseAssigned === true) {
	
	console.log("The case they were assigned was a " + crimeList[0] + " investigation of one of the richest pharmaceutical companies in town.");
	
}

console.log("They had been hit last night around " + crimeTime + "am when the guards were changing shifts.");

evidenceShown = decideEvidence(optionOne,optionTwo);

console.log("From the evidence it apeared there were " + evidenceShown + ". They had already talked with the witnesses and determined that they were not involved in the crime.");

numPlates = getLicense(99999);

console.log("They decided to run the partial license plate they got from the witnesses to see how many places they needed to investigate and found that there were " + numPlates + " plates that were possible matches.");

storyClose = getItems(grabItems,10);

console.log(storyClose);