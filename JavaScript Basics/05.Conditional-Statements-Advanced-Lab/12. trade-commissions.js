function tradeCommissions(city, sales) {
    city = String(city);
    sales = Number(sales);

    let commission = .00;

    switch (city) {
        case "Sofia":
            if (sales >= 0 && sales <= 500) {
                console.log((sales * .05).toFixed(2));
            } else if(sales > 500 && sales <= 1000) {
                console.log((sales * .07).toFixed(2));
            } else if(sales > 1000 && sales <= 10000) {
                console.log((sales * .08).toFixed(2));
            } else if(sales > 10000) {
                console.log((sales * 0.12).toFixed(2));
            }
            break;
        case "Varna":
            if (sales >= 0 && sales <= 500) {
                console.log((sales * .045).toFixed(2));
            } else if(sales > 500 && sales <= 1000) {
                console.log((sales * .075).toFixed(2));
            } else if(sales > 1000 && sales <= 10000) {
                console.log((sales * .1).toFixed(2));
            } else if(sales > 10000) {
                console.log((sales * 0.13).toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case "Plovdiv":
            if (sales >= 0 && sales <= 500) {
                console.log((sales * .055).toFixed(2));
            } else if(sales > 500 && sales <= 1000) {
                console.log((sales * .08).toFixed(2));
            } else if(sales > 1000 && sales <= 10000) {
                console.log((sales * .12).toFixed(2));
            } else if(sales > 10000) {
                console.log((sales * 0.145).toFixed(2));
            } else {
                console.log("error");
            }
            break;
        default:
            console.log("error");
            break;
    }
}

tradeCommissions("Sofia", 1500);
tradeCommissions("Plovdiv", 499.99);
tradeCommissions("Varna", 3874.5);
tradeCommissions("Kaspichan", -50);