//create secret num
var secretNumber = 4;

//ask for guess
var guess = prompt("Guess a number: ");

// check if guess is right
if (Number(guess) === secretNumber){
	alert("you got it right");
}
else if (Number(guess) > secretNumber)
{
	alert("too high");
}
else 
{
	alert("too low");
}