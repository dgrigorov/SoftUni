function multiplicationTable(input) {
    input = Number(input);

    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${input} = ${i * input}`);
    }
}

multiplicationTable("5");