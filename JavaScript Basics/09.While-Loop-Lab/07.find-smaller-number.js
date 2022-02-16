function minNumber(arr) {
    let smaller = Number(arr[0]);
    let index = 1;          

    while (arr[index] != "Stop") {
        arr[index] = Number(arr[index]);
        if (smaller > arr[index]) {
            smaller = arr[index];
        }
        index++;
    }
    console.log(smaller);
}

minNumber([-10, 20, -30, "Stop"]);