// alert("JavaScript works!");

// define gloabl variables

var oldCop = "Frank";
	newCop = "Max";
	investigateTime = 20;
	isStolen = true;
	currentDate = new Date();
	
	// function for pulling vehicle make and model for given license data name
	vehicleData = function(userData) {
		
		key = userData;
		object = licenseInfo.license[key].licenseData;
		vehicleArray = [object.make, object.model, object.year, object.vin];
		
		return vehicleArray;
		
	} // end vehicle function
		
	// function for validating license data
	isValid = function(date, name) {
		
		var current = new Date(date);
			userName = name;
			
			for(key in licenseInfo.license) {
				
				obj = licenseInfo.license[key];
				
				if (userName === obj.name) {
					
					objDate = new Date(obj.renewDate);
					
					if (current > objDate) {
						
						valid = false;
						
					} else {
						
						valid = true;
						
					}; // end nested conditional
					
				}; // end origianl if statement
				
			}; // end for in loop
			
			return valid;
			
	}; // end isValid function
	
	// function to check how many people they have left to ask
	getRemaining = function(number) {
		
		jsonObj = licenseInfo.license.length
		totalLeft = jsonObj - number;
		
		return totalLeft;
		
	}; // end getRemaining function

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

carInfo = vehicleData(1);

console.log("Ma'am, do you own a " + carInfo[2] + " " + carInfo[0] + " " + carInfo[1] + " with a VIN number of " + carInfo[3] + "?");
console.log("\"Yes,\" the woman replied.");

// check if her license is valid
checkRenewDate = isValid(currentDate, "Jane Applegate");

if (checkRenewDate === true) {
	
	console.log("Thank you for keeping the vehicle registered.");
	
} else {
	
	console.log("Did you know that the vehicle plates are expired?");
	
}; // end checkRenewDate conditional

console.log("\"It was stolen last month so I never bothered to register the plates,\" she replied.");
console.log("Frank looked at Max as they both nodded knowing just which vehicle that should be going after.");

peopleRemaining = getRemaining(2);

console.log("After that should we go and investigate the last " + peopleRemaining + " people left?");
console.log("No, let's just get back to the precinct and get an A.P.B. out.");

