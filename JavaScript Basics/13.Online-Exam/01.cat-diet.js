function catDiet(fats, protein, carbs, calories, water) {
    // 1g fats = 9 calories
    // 1g protein = 4 calories
    // 1g carbs = 4 calories

    fats = Number(fats);
    protein = Number(protein);
    carbs = Number(carbs);
    calories = Number(calories);
    water = Number(water);

    let totalFats = (calories * (fats / 100)) / 9;
    let totalProtein = (calories * (protein / 100)) / 4;
    let totalCarbs = (calories * (carbs / 100)) / 4;

    let totalFood = totalFats + totalProtein + totalCarbs;
    let caloriesPerGramFood = calories / totalFood;
    let waterPercentage = (100 - water) / 100;

    let totalCalories = caloriesPerGramFood * waterPercentage;

    console.log(totalCalories.toFixed(4));

}

// catDiet(60, 25, 15, 2500, 60);
catDiet(40, 40, 20, 3000, 40);
// catDiet(20, 60, 20, 1800, 50);