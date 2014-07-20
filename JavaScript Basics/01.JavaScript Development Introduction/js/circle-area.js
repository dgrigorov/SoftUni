function calcCircleArea(r) {
	radius = document.getElementById("radius").value;

	if (document.getElementById("radius").value == "") {
		alert("You can enter radius vlaue")
	}
	else {
		document.getElementById("result").innerHTML = "r = " + radius + "; area = " + (Math.PI * Math.pow(radius, 2));
	}
	
}