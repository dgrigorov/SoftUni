function operationsBetweenNumbers(n1, n2, sign) {
    n1 = Number(n1);
    n2 = Number(n2);

    let result;

    switch (sign) {
        case "+":
            result = n1 + n2;
            if(result % 2 == 0) {
                console.log(`${n1} ${sign} ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} ${sign} ${n2} = ${result} - odd`);
            }
            break;
        case "-":
            result = n1 - n2;
            if(result % 2 == 0) {
                console.log(`${n1} ${sign} ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} ${sign} ${n2} = ${result} - odd`);
            }
            break;
        case "*":
            result = n1 * n2;
            if(result % 2 == 0) {
                console.log(`${n1} ${sign} ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} ${sign} ${n2} = ${result} - odd`);
            }
            break;
        case "/":
            if(n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`); 
            } else {
                result = n1 / n2;
                console.log(`${n1} ${sign} ${n2} = ${result.toFixed(2)}`);
            }
            break;
        case "%":
            if(n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                result = n1 % n2;
                console.log(`${n1} ${sign} ${n2} = ${result}`);
            }
           
            break;
        default:
            break;
    }
}

operationsBetweenNumbers(10, 12, "+");
operationsBetweenNumbers(10, 1, "-");
operationsBetweenNumbers(7, 3, "*");
operationsBetweenNumbers(123, 12, "/");
operationsBetweenNumbers(10, 3, "%");
operationsBetweenNumbers(112, 0, "/");
operationsBetweenNumbers(10, 0, "%");