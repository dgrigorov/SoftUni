function sumOfNumbers(input) {
    input = input.toString();

    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        sum += parseInt(input[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}


sumOfNumbers("1234");
sumOfNumbers("564891");