function maxNumber(arr) {
    let biggest = Number(arr[0]);
    let index = 1;          

    while (arr[index] != "Stop") {
        arr[index] = Number(arr[index]);
        if (biggest < arr[index]) {
            biggest = arr[index];
        }
        index++;
    }
    console.log(biggest);
}

maxNumber([100, 99, 80, 70, "Stop"]);