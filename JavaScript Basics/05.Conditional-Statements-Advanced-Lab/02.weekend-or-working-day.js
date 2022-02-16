function weekendOrWorkingDay(day) {
    day = String(day);
    let workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    if(day === "Saturday" || day === "Sunday") {
        console.log("Weekend");
    } else if(workingDays.indexOf(day) !== -1) {
        console.log("Working day")
    } else {
        console.log("Error");
    }
}