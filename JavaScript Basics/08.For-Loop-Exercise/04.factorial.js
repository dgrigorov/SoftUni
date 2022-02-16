function factorial(input) {
    input = Number(input);

    let sum = 1;

    if(input != 0 && input != 1) {
        for (let i = 2; i <= input; i++) {
            sum *= i;
        }
    }

    console.log(sum);
}

factorial(4);