function invalidNumber(input) {
    input = Number(input);

    let isValid = (input >= 100 && input <= 200) || input == 0;
    if (!isValid) {
        console.log("invalid");
    }
}

invalidNumber(75);
invalidNumber(150);
invalidNumber(220);
invalidNumber(199);
invalidNumber(-1);
invalidNumber(100);
invalidNumber(200);
invalidNumber(0);