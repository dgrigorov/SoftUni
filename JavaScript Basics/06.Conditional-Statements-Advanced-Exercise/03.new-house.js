function newHouse(typeOfFlowers, numOfFlowers, budget) {
    typeOfFlowers = String(typeOfFlowers);
    numOfFlowers = Number(numOfFlowers);
    budget = Number(budget);

    // Prices of the different types of flowers 
    let rose = 5;
    let dahlias = 3.8;
    let tulips = 2.8;
    let narcissus = 3;
    let gladiolus = 2.5;
    let total;

    switch (typeOfFlowers) {
        case "Roses":
            total = numOfFlowers * rose;
            if (numOfFlowers > 80) {
                total = total - (total * .1);
            }
            break;
        case "Dahlias":
            total = numOfFlowers * dahlias;
            if (numOfFlowers > 90) {
                total = total - (total * .15);
            }
            break;
        case "Tulips":
            total = numOfFlowers * tulips;
            if (numOfFlowers > 80) {
                total = total - (total * .15);
            }
            break;
        case "Narcissus":
            total = numOfFlowers * narcissus;
            if (numOfFlowers < 120) {
                total = total + (total * .15);
            }
            break;
        case "Gladiolus":
            total = numOfFlowers * gladiolus;
            if (numOfFlowers < 80) {
                total = total + (total * .2);
            }
            break;
        default:
            break;
    }

    if (total > budget) {
        let needed = total - budget;
        console.log(`Not enough money, you need ${needed.toFixed(2)} leva more. `);
    } else {
        let left = budget - total;
        console.log(`Hey, you have a great garden with ${numOfFlowers} ${typeOfFlowers} and ${left.toFixed(2)} leva left.`)
    }
}

newHouse("Roses", 55, 250);
newHouse("Tulips", 88, 260);
newHouse("Narcissus", 119, 360);
newHouse("Gladiolus", 64, 160);