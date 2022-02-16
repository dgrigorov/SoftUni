function godzillaKong(movieBudget, actors, clothes) {
    movieBudget = Number(movieBudget);
    actors = Number(actors);
    clothes = Number(clothes);

    let decor = movieBudget * .1;
    let totalClothesAmount = actors * clothes;

    if(actors > 150){
        totalClothesAmount = totalClothesAmount - (totalClothesAmount * .1);
    }

    let total = decor + totalClothesAmount;
    
    if(total > movieBudget) {
        let needed = total - movieBudget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${needed.toFixed(2)} leva more.`);
    } else {
        let left = movieBudget - total;
        console.log("Action!");
        console.log(`Wingard starts filming with ${left.toFixed(2)} leva left.`);
    }

}

godzillaKong(20000, 120, 55.5);
godzillaKong(15437.62, 186, 57.99);
godzillaKong(9587.88, 222, 55.68);
