function journey(budget, season) {
    budget = Number(budget);
    season = String(season);

    let stayPrice, country, place;

    if (budget > 0 && budget <= 100) {
        // Stay in Bulgaria
        country = "Bulgaria";
        switch (season) {
            case "summer":
                place = "Camp";
                stayPrice = budget * .3;
                break;
            case "winter":
                place = "Hotel";
                stayPrice = budget * .7;
                break;
            default:
                break;
        }
    } else if(budget > 100 && budget <= 1000) {
        // Stay in Balkans
        country = "Balkans";
        switch (season) {
            case "summer":
                place = "Camp";
                stayPrice = budget * .4;
                break;
            case "winter":
                place = "Hotel";
                stayPrice = budget * .8;
                break;
            default:
                break;
        }
    } else {
        place = "Hotel";
        country = "Europe";
        stayPrice = budget * .9;
    }

    console.log(`Somewhere in ${country}`);
    console.log(`${place} - ${stayPrice.toFixed(2)}`);
}

journey(50, "summer");
journey(75, "winter");
journey(312, "summer");
journey(678.53, "winter");
journey(1500, "summer");