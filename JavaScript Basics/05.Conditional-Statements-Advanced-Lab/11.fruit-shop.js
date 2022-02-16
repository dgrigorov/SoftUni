function fruitShop(fruit, day, quantity) {
    fruit = String(fruit);
    day = String(day);
    quantity = Number(quantity);

    let workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    if (day == "Saturday" || day == "Sunday") {
        switch (fruit) {
            case "banana":
                console.log((quantity * 2.7).toFixed(2));
                break;
            case "apple":
                console.log((quantity * 1.25).toFixed(2));
                break;
            case "orange":
                console.log((quantity * .9).toFixed(2));
                break;
            case "grapefruit":
                console.log((quantity * 1.6).toFixed(2));
                break;
            case "kiwi":
                console.log((quantity * 3).toFixed(2));
                break;
            case "pineapple":
                console.log((quantity * 5.6).toFixed(2));
                break;
            case "grapes":
                console.log((quantity * 4.20).toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }
    } else if(workingDays.indexOf(day) !== -1) {
        switch (fruit) {
            case "banana":
                console.log((quantity * 2.5).toFixed(2));
                break;
            case "apple":
                console.log((quantity * 1.2).toFixed(2));
                break;
            case "orange":
                console.log((quantity * .85).toFixed(2));
                break;
            case "grapefruit":
                console.log((quantity * 1.45).toFixed(2));
                break;
            case "kiwi":
                console.log((quantity * 2.7).toFixed(2));
                break;
            case "pineapple":
                console.log((quantity * 5.5).toFixed(2));
                break;
            case "grapes":
                console.log((quantity * 3.85).toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }
    } else {
        console.log("error");
    }
}

fruitShop("apple", "Tuesday", 2);
fruitShop("orange", "Sunday", 3);
fruitShop("kiwi", "Monday", 2.5);
fruitShop("grapes", "Saturday", .5);
fruitShop("tomato", "Monday", .5);