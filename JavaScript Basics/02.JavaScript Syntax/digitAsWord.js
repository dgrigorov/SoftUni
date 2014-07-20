function convertDigitToWord(number) {
	switch(number) {
		case 1: 
			return("One");
			break;

		case 2: 
			return("Two");
			break;

		case 3: 
			return("Three");
			break;

		case 4: 
			return("Four");
			break;

		case 5: 
			return("Five");
			break;

		case 6: 
			return("Six");
			break;

		case 7: 
			return("Seven");
			break;

		case 8: 
			return("Eight");
			break;

		case 9: 
			return("Nine");
			break;

		case default: 
			return("Number must be 0<n<10");
			break;
	}
}

console.log(convertDigitToWord(Number(8)));
console.log(convertDigitToWord(Number(3)));
console.log(convertDigitToWord(Number(5)));