function bonusScore(input) {
    input = Number(input);
    let bonus = 0.0;

    if (input <= 100) {
        bonus = 5;
    } else if(input > 1000) {
        bonus = input * .1;
    } else {
        bonus = input * .2;
    }

    if (input % 2 == 0) {
        bonus += 1;    
    } else if(input % 10 == 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(bonus + input);
}

bonusScore(175);