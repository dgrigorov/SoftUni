function speedInfo(input) {
    if (input <= 10) {
        console.log("slow");
    } else if(input > 10 && input <= 50){
        console.log("average");
    } else if(input > 50 && input <= 150) {
        console.log("fast");
    } else if(input > 150 && input <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}

speedInfo(1000.5);