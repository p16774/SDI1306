// alert("JavaScript works!");

// define gloabl variables

var oldCop = "Frank";
	newCop = "Max";
	


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
		
	}
	
}



console.log(oldCop + " grabbed the one off the top and read the address aloud.");
console.log("Let's go and see " + licenseInfo.license[2].name + " and see what they have to say.");

