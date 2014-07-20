function divisionChecker(num) {

	if (num % 3 == 0) {
		console.log('the number is divided by 3 without remainder');
	}
	else {
		console.log('the number is not divided by 3 without remainder');
	}
}

console.log(divisionChecker(12));
console.log(divisionChecker(189));
console.log(divisionChecker(591));
console.log(divisionChecker(132));