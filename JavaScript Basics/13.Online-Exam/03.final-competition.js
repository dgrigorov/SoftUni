function finalCompetition(dancers, points, season, place) {
    dancers = Number(dancers);
    points = Number(points);
    season = String(season);
    place = String(place);

    let wonPrice;

    if (place == "Bulgaria") {
        wonPrice = dancers * points;

        if (season == "summer") {
            wonPrice -= wonPrice * .05;
        } else {
            wonPrice -= wonPrice * .08;
        }
    } else {
        wonPrice = dancers * points;
        wonPrice += wonPrice * .5;

        if (season == "summer") {
            wonPrice -= wonPrice * .1;
        } else {
            wonPrice -= wonPrice * .15;
        }
    }

    let charityMoney = wonPrice * .75;
    let moneyLeft = wonPrice - charityMoney;
    let moneyPerDancer = moneyLeft / dancers;

    console.log(`Charity - ${charityMoney.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
}

// finalCompetition(1, 89.5, "summer", "Abroad");
finalCompetition(25, 98, "winter", "Bulgaria");