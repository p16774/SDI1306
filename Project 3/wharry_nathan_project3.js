// alert("JavaScript works!");

// define gloabl variables

var oldCop = "Frank";
	newCop = "Max";
	investigateTime = 20;
	isStolen = true;
	
	// function for pulling vehicle make and model for given license data name
	vehicleData = function(userData) {
		
		key = userData;
		object = licenseInfo.license[key].licenseData;
		vehicleArray = [object.make, object.model, object.year, object.vin];
		
		return vehicleArray;
		
	} // end vehicle function
	
	// function for pulling today's date
	todayDate = function() {
		
		var date = new Date();
			today = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
			
		return today;
		
	};
	
	// function for validating license data
	isValid = function(date, name) {
		
		var current = date;
			userName = name;
			
			for(key in licenseInfo.license) {
				
				obj = licenseInfo.license[key];
				
				if (userName === obj.name) {
					
					if (current < obj.renewDate) {
						
						valid = false;
						
					} else {
						
						valid = true;
						
					}; // end nested conditional
					
				}; // end origianl if statement
				
			}; // end for in loop
			
			return valid;
			
	}; // end isValid function

// begin story elements

console.log("As " + oldCop + " and " + newCop + " took off, " + newCop + " pulled out the list of possible suspects and went through them.");
console.log("He quickly rattled off the names, addresses, and the make and models of the possible vehicles.");
console.log("We have the following locations.");

// for in loop to name the people and locations from json data

for (var key in licenseInfo.license) {
		
	data = licenseInfo.license[key];
	total = licenseInfo.license.length;
	
	// console.log(key);
	
	// if (key == 0) { console.log("done!"); }
		
	if (key === "0") {
		
		console.log("We have " + data.name + " located at " + data.address + ",");
		
	} else if (key < (total-1) && key != "0") {
		
		console.log("and " + data.name + " located at " + data.address + ",");
		
	} else if (key == (total-1)) {
		
		console.log("and lastly we have " + data.name + " located at " + data.address + ".");
		
	} // end conditional if/else statement
	
} // end for in loop


console.log(oldCop + " grabbed the one off the top and read the address aloud.");
console.log("\"Let's go and see " + licenseInfo.license[2].name + " and see what they have to say.\"");
console.log("They left the precinct and quickly made their way to " + licenseInfo.license[2].address + ".");
console.log("Knocking on the door they were met by a smartly dressed young man. \"Wondering if we could take " + investigateTime + " minutes of your time?");

// start math while loop

while(investigateTime > 0) {
	
	console.log(newCop + " checked his watched as they asked questions and saw they had " + investigateTime + " minutes left.");
	investigateTime = investigateTime - 5;
	
} // end while math loop

console.log("After questioning the suspect and finding he had an alibi, the officers picked another name at random and left to investigate.");
console.log("Upon arriving they once again asked if they could ask a few questions.");

// question and boolean values

console.log(vehicleData(2));

currentDate = todayDate();

test = isValid(currentDate, "Jim Stewart");

console.log(test);
