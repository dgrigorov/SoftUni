function cinemaTicket(day) {
    day = String(day);

    switch (day) {
        case "Monday":
            console.log(12);
            break;
        case "Tuesday":
            console.log(12);
            break;
        case "Wednesday":
            console.log(14);
            break;
        case "Thursday":
            console.log(14);
            break;
        case "Friday":
            console.log(12);
            break;
        case "Saturday":
            console.log(16);
            break;
        case "Sunday":
            console.log(16);
            break;
        default:
            break;
    }
}

cinemaTicket("Monday");
cinemaTicket("Friday");
cinemaTicket("Sunday");