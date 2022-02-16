function workingHours(hour, dayOfWeek) {
    if (dayOfWeek == "Sunday" || hour < 10 || hour > 18) {
        console.log("closed");
    } else {
        if (hour >= 10 && hour <= 18) {
            console.log("open");
        }
    }
}

workingHours(11, "Monday")
workingHours(19, "Friday")
workingHours(11, "Sunday")