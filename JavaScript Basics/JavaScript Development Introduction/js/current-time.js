function currentTime() {
	var currentdate = new Date(); 
	var datetime = currentdate.getHours() + ":" + currentdate.getMinutes();

    console.log(datetime);
}