// alert("JavaScript works!");

// function for determining phone pattern

checkPhoneNumber = function(string) {
	
	// assign variables
	var phoneNumber = string;
		firstNumber = 0;
		secondNumber = 0;
		fourthNumber = 0; // can't use thirdNumber - firebug throws an error with this variable every time
		
		console.log(phoneNumber);
		
		// check for a valid starting length
		if (phoneNumber.length < 10) {
			
			validNumber = false;
			
		} else {
		
			divider = phoneNumber.indexOf("-")
			
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


