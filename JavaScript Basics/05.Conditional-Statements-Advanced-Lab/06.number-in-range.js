function numberInRange(input) {
    input = Number(input);

    if (input >= -100 && input <= 100 && input !== 0) {
        console.log("Yes")
    } else {
        console.log("No");
    }
}

numberInRange(-25);
numberInRange(0);
numberInRange(25);