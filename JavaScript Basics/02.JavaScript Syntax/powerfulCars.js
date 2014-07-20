function convertKWtoHP(kw) {
	var hp = (kw / 0.746);
	return hp.toFixed(2);
}
 
console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(100));