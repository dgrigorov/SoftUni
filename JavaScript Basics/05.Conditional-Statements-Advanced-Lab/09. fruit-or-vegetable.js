function fruitOrVeggie(product) {
    product = String(product);

    let fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes"];
    let vegetables = ["tomato", "cucumber", "pepper", "carrot"];

    if (fruits.indexOf(product) !== -1) {
        console.log("fruit");
    } else if(vegetables.indexOf(product) !== -1) {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }
}

fruitOrVeggie("kiwi");