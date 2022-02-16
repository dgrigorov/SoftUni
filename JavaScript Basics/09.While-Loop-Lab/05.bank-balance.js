function bankBalance(arr) {
    let sum = 0;
    let index = 0;

    while (arr[index] != "NoMoreMoney") {
        arr[index] = Number(arr[index]);

        if (arr[index] > 0) {
            sum += arr[index];
            console.log(`Increase: ${arr[index].toFixed(2)}`);
        } else {
            console.log("Invalid operation!");
            break;
        }

        index++;
    }

    console.log(`Total: ${sum.toFixed(2)}`);
}

bankBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
bankBalance(["120", "45.55", "-150"]);