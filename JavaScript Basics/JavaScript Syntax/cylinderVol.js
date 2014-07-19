function calcCylinderVol() {
	var r = arguments[0];
    var h = arguments[1];
    return (Math.PI * Math.pow(r, 2) * h).toFixed(3)
}

console.log(calcCylinderVol(2,4))
console.log(calcCylinderVol(5,8))
console.log(calcCylinderVol(12,3))