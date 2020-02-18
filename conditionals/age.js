var age = prompt("what is your age?");

if (age < 0){
	console.log("Error, invalid age");
}
else if (age%2 !== 0){
	console.log("your age is odd!");
}
else if (age % Math.sqrt(age) === 0){
	console.log("perfect square!");
}
else if (age < 18){
	console.log("You cannot come in");
}

else if (age < 21){
	console.log("You can come in, but cannot drink");
}
else if (age === 21){
	console.log("Happy 21st Birthday!");
}

else {
	console.log("You can come in and drink");
}