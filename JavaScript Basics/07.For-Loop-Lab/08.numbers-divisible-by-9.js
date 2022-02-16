function divisibleByNine(n1, n2) {
    n1 = Number(n1);
    n2 = Number(n2);
    
    let sum = 0;
    let numberString = "";

    for (let i = n1; i <= n2; i++) {
        if(i % 9 == 0) {
            sum += i;
            numberString += i + '\n';
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(numberString);
}

divisibleByNine("100", "200");