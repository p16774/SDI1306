// alert("JavaScript works!");

// function for determining phone pattern

checkPhoneNumber = function(number) {
	
	// assign variables
	var phoneNumber = number;
		firstNumber = 0;
		secondNumber = 0;
		fourthNumber = 0; // can't use thirdNumber - firebug throws an error with this variable every time
		
		console.log(phoneNumber);
		
		// check for a valid starting length
		if (phoneNumber.length < 10) {
			
			validNumber = false;
			
		} else {
		
			//check for dashes
			divider = phoneNumber.indexOf("-")
			
			// validate if dashes were used
			if(divider === -1) {
				
				if(phoneNumber.length != 10) {
					
					validNumber = false;
					
				} else {
					
					if(isNaN(phoneNumber) === false) {
						
						validNumber = true;
						
					} else {
						
						validNumber = false;
						
					}; // end ifelse valid number check on value without dashes
					
				}; // end ifelse checks for valid length without dashes
				
			} else {
				
				// verify dashes and value of numbers
				if(phoneNumber.indexOf("-") != phoneNumber.lastIndexOf("-")) {
				
					// pull out the numbers from the dashes
					firstNumber = phoneNumber.substr(0,3);
					secondNumber = phoneNumber.substr(4,3);
					fourthNumber = phoneNumber.substr(8);
					
					if((isNaN(firstNumber) === false) && (isNaN(secondNumber) === false) && (isNaN(fourthNumber) === false)) {
						
						validNumber = true;
						
					} else {
						
						validNumber = false;
						
					}; // end the double dash and isNaN checks		
					
				} else {
					
					if(phoneNumber.length != 11) {
						
						validNumber = false;
						
					} else {
						
						// pull out the numbers from the dashes
						firstNumber = phoneNumber.substr(0,3);
						secondNumber = phoneNumber.substr(4,3);
						fourthNumber = phoneNumber.substr(7);
						
						if((isNaN(firstNumber) === false) && (isNaN(secondNumber) === false) && (isNaN(fourthNumber) === false)) {
							
							validNumber = true;
							
						} else {
							
							validNumber = false;
							
						}; // end the single dash and isNaN checks
						
					}; // end the ifelse check for valid dash placements length
					
				}; // end the ifelse check to make sure the number is still valid if only 1 dash is used
				
			}; // end ifelse check for dashes
			
		}; // end ifelse check for valid length on original value
		
		return validNumber;
			
}; // end checkPhoneNumber function


// check for valid email address

checkEmail = function(email) {
	
	var emailAddress = email;
		emailName = emailAddress.indexOf("@");
		emailDomain = emailAddress.substr(emailName);
		emailDot = emailAddress.lastIndexOf(".");
		emailDotCom = emailAddress.substr(emailDot);
		
	// validate we have the necessary characters to split the function up
	if (emailName === -1) {
		
		validEmail = false;
		
	} else {
		
		// check for valid . in email
		if(emailDot === -1) {
			
			validEmail = false;
			
		} else {
			
			// check to make sure you aren't finding a dot before the @ symbol
			if(emailDot < emailName) {
				
				validEmail = false;
				
			} else {
				
				// check for correct .com length
				if(emailDotCom.length != 4) {
					
					validEmail = false;
					
				} else {
					
					// check to make sure we have a semi-valid domain
					if(emailDomain.length < 6) {
						
						validEmail = false;
						
					} else {
						
						validEmail = true;
						
					}; // end valid domain check
					
				}; // end valid .com length
				
			}; // end dot before @ symbol check
			
		}; // end valid . check in email
		
	}; // end valid necessary character check on @ symbol
	
	return validEmail;	
	
}; // end the checkEmail function


// valid URL function check

checkURL = function(address) {
	
	var webAddress = address;
		regAddress = address.substr(0,7);
		secureAddress = address.substr(0,8);
		
		// check regular address
		if(regAddress === "http://") {
			
			validURL = true;
			
		} else {
			
			if(secureAddress === "https://") {
				
				validURL = true;
				
			} else {
				
				validURL = false;
				
			}; // end additional check for secure URL (https)
			
		}; // end check for valid URL (http)
		
		return validURL;
	
}; // end checkURL function


// function to check the amount of time between two dates
checkDates = function(firstDate,secondDate,dataType) {
	
	var startDate = new Date(firstDate);
		finishDate = new Date(secondDate);
		output = dataType.toLowerCase();
		totalAmount = 0;
		
		// convert dates to a number for math calculation
		startDate = Math.abs(startDate.getTime());
		finishDate = Math.abs(finishDate.getTime());
		
		// check to make sure that our Dates are valid numbers
		if(isNaN(startDate) === true || isNaN(finishDate) === true) {
			
			console.log("Your dates are not valid. Please enter valid dates to evalute.");
			return;
			
		} else {
		
			// function to evaluate the dates to get our proper amount before calculating format
			totalAmount = Math.abs(finishDate - startDate);
			totalAmount = (((totalAmount/1000)/60)/60);
			
			// determine hours or days
			if(output === "hours") {
				
				return totalAmount;
				
			} else if(output === "days") {
				
				totalAmount = totalAmount/24;
				return totalAmount;
				
			} else {
				
				console.log("You did not enter a valid output format. Please enter \"hours\" or \"days\"."); 
				return;
				
			}; // end output format check
			
		}; // end valid date check
		
		return totalAmount;
		
}; // end the checkDates function


// function to convert a number string into a valid "number" property

checkNumber = function(number) {
	
	var convertNumber = number;
		
		// validate number
		if (isNaN(convertNumber) === true) {
			
			console.log("This is not a valid number. Please re-enter and try again.");
			return;
			
		} else {
			
			numConverted = Number(convertNumber);

			// check that our number is actually a number value before returning
			if (convertNumber === numConverted) {
				
				console.log("Number was not converted correctly.");
				
			}; // end validation check on status of "number"
			
		}; // end validation check on whether it's a valid string number to being conversion
			
		return numConverted;
		
}; // end the checkNumber function
	

// function to total an array of number types only
addNumbers = function(array) {
	
	var addArray = array;
		arrayTotal = 0;
	
	//loop through array and add as needed the number types
	for (var i = 0; i < addArray.length; i++) {
		
		//validate number and add
		checkForNumber = Number(addArray[i]);
		
		if(addArray[i] === checkForNumber) {
			
			// add our valid number
			arrayTotal = arrayTotal + checkForNumber;
			
		} else {
			
			// do nothing since our value is not an array
			
		}; // end valid number check to add to array
		
	}; //end for loop
	
	return arrayTotal;
	
}; // end the addNumbers function


// testing values

//console.log(checkPhoneNumber("123-456-7890"));
//console.log(checkEmail("nathan.wharry@a.com"));
//console.log(checkURL("http:/www.project3w.com"));
//console.log(checkDates("06/01/13","06/30/13","HoUrS"));
//console.log(checkNumber("3495"));
//console.log(addNumbers([1,"2",3,5,"8",13,"pickles",true,"humbug"]));