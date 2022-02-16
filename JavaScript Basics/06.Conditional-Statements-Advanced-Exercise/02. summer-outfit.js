function summerOutfit(temp, timeOfDay) {
    temp = Number(temp);
    let outfit, shoes;

    if (temp >= 10 && temp <= 18) {
        if (timeOfDay == "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if(timeOfDay == "Afternoon") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } else if(temp > 18 && temp <= 24) {
        if (timeOfDay == "Morning") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if(timeOfDay == "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } else if(temp > 25) {
        if (timeOfDay == "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if(timeOfDay == "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(16, "Morning");
summerOutfit(22, "Afternoon");
summerOutfit(28, "Evening");