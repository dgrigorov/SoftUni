function fishingBoat(budget, season, fisherman) {
    budget = Number(budget);
    season = String(season);
    fisherman = Number(fisherman);

    let springShipPrice = 3000;
    let summerAutumnShipPrice = 4200;
    let winterShipPrice = 2600;
    let total, discount;

    switch (season) {
        case "Spring":
            if (fisherman <= 6) {
                total = springShipPrice - (springShipPrice * .1);
            } else if (fisherman >= 7 && fisherman <= 11) {
                total = springShipPrice - (springShipPrice * .15);
            } else {
                total = springShipPrice - (springShipPrice * .25);
            }

            if (fisherman % 2 == 0) {
                total = total - (total * .05);
            }
            break;
        case "Summer":
        case "Autumn":
            if (fisherman <= 6) {
                total = summerAutumnShipPrice - (summerAutumnShipPrice * .1);
            } else if (fisherman >= 7 && fisherman <= 11) {
                total = summerAutumnShipPrice - (summerAutumnShipPrice * .15);
            } else {
                total = summerAutumnShipPrice - (summerAutumnShipPrice * .25);
            }

            if (fisherman % 2 == 0 && season == "Summer") {
                total = total - (total * .05);
            }
            break;
        case "Winter":
            if (fisherman <= 6) {
                total = winterShipPrice - (winterShipPrice * .1);
            } else if (fisherman >= 7 && fisherman <= 11) {
                total = winterShipPrice - (winterShipPrice * .15);
            } else {
                total = winterShipPrice - (winterShipPrice * .25);
            }

            if (fisherman % 2 == 0) {
                total = total - (total * .05);
            }
            break;
        default:
            break;
    }

    if (total > budget) {
        let needed = total - budget;
        console.log(`Not enough money! You need ${needed.toFixed(2)} leva. `);
    } else {
        let left = budget - total;
        console.log(`Yes! You have ${left.toFixed(2)} leva left.`)
    }

}

fishingBoat(3000, "Summer", 11);
fishingBoat(3600, "Autumn", 6);
fishingBoat(2000, "Winter", 13);