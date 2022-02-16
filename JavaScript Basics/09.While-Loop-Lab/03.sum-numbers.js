function sumOfElements(arr) {
    let index = 1;
    let sum = 0;

    while (arr[0] > sum) {
        sum += arr[index];
        index++;
    }
    console.log(sum);
}

sumOfElements([100,10,20,30,40]);
sumOfElements([20,1,2,3,4,5,6]);