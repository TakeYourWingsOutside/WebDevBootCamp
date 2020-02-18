function isEven(number){
    if (number % 2 === 0){
        return true;
    }
    else
        return false;
}

function factorial (number){
	result = 1;
	while (number > 0){
		result = result * number;
		number--;
	}
	
	return result;
}

function kebabToSnake(word){
	while(word.indexOf("-") != -1){
		word = word.replace("-", "_");
	}
	return word;
}

	// var theWord = prompt("enter word");
	// alert(kebabToSnake(theWord));