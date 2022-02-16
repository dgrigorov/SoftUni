function calculateBookReading(pages, pagesPerHour, days) {
    pages = Number(pages);
    pagesPerHour = Number(pagesPerHour);
    days = Number(days);

    let totalReadingTime = pages / pagesPerHour;
    let result = totalReadingTime / days;

    console.log(result);
}

calculateBookReading("432", "15", "4");