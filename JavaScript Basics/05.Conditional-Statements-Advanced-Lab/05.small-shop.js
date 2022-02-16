function smallShop(product, city, quantity) {
    product = String(product);
    city = String(city);
    quantity = Number(quantity);

    if (city == "Sofia") {
        switch (product) {
            case "coffee":
                console.log((quantity * .5).toFixed(4));
                break;
            case "water":
                console.log((quantity * .8).toFixed(4));
                break;
            case "beer":
                console.log((quantity * 1.2).toFixed(4));
                break;
            case "sweets":
                console.log((quantity * 1.45).toFixed(4));
                break;
            case "peanuts":
                console.log((quantity * 1.6).toFixed(4));
                break;
            default:
                break;
        }
    } else if(city == "Plovdiv") {
        switch (product) {
            case "coffee":
                console.log((quantity * .4).toFixed(4));
                break;
            case "water":
                console.log((quantity * .7).toFixed(4));
                break;
            case "beer":
                console.log((quantity * 1.15).toFixed(4));
                break;
            case "sweets":
                console.log((quantity * 1.30).toFixed(4));
                break;
            case "peanuts":
                console.log((quantity * 1.5).toFixed(4));
                break;
            default:
                break;
        }
    } else if(city == "Varna") {
        switch (product) {
            case "coffee":
                console.log((quantity * .45).toFixed(4));
                break;
            case "water":
                console.log((quantity * .7).toFixed(4));
                break;
            case "beer":
                console.log((quantity * 1.10).toFixed(4));
                break;
            case "sweets":
                console.log((quantity * 1.35).toFixed(4));
                break;
            case "peanuts":
                console.log((quantity * 1.55).toFixed(4));
                break;
            default:
                break;
        }
    }
}

smallShop("coffee", "Varna", 2);
smallShop("peanuts", "Plovdiv", 1);
smallShop("beer", "Sofia", 6);
smallShop("water", "Plovdiv", 3);
smallShop("sweets", "Sofia", 2.23);