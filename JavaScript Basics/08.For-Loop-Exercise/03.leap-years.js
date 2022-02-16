function leapYears(leapYear, randomYear) {
    leapYear = Number(leapYear);
    randomYear = Number(randomYear);

    for (let i = leapYear; i <= randomYear; i++) {
        let isLeap = (i % 4 == 0) || (i % 400 == 0);
        if (isLeap) {
            console.log(i);
        }
    }
}

// leapYears("1908", "1919");
// leapYears("2000", "2011");
// leapYears("1584", "1597");
leapYears("2020", "2032");