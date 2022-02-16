function calculatePetNeeds(numDogs, numAnimals) {
    let dogsFood = Number(numDogs) * 2.5;
    let animalsFood = Number(numAnimals) * 4;
    let total = dogsFood + animalsFood;
    console.log(`${total} lv.`);
}

calculatePetNeeds("5", "4");