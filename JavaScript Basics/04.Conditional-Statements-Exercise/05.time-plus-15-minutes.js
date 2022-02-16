function timePlus15Minutes(hour, minutes) {
    hour = Number(hour);
    minutes = Number(minutes);

    let totalMinutes = (hour * 60) + minutes + 15;
    let resultHours = Math.trunc(totalMinutes / 60);
    let resultMinutes = totalMinutes % 60;

    if (resultHours === 24) {
        resultHours = 0;
    }

    if (resultMinutes < 10) {
        console.log(`${resultHours}:0${resultMinutes}`);
    } else {
        console.log(`${resultHours}:${resultMinutes}`);
    }
}

timePlus15Minutes(0, 01);