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





// testing values
// console.log(checkPhoneNumber("123-456-7890"));
console.log(checkEmail("nathan.wharry@a.com"));