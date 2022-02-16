function powersOfTwo(input) {
    input = Number(input);

    for (let i = 0; i <= input; i+= 2) {
        console.log(Math.pow(2, i));
    }
}

powersOfTwo("10");