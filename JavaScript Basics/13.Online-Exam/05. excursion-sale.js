function excursionSale(arr) {
    let seaExcursionPackages = arr[0];
    let mountainExcursionPackages = arr[1];
    let package = "";
    let total = 0;

    for (let i = 2; i <= arr.length; i++) {
        package = arr[i];

        if(package == "Stop") {
            break;
        }

        if (package == "sea" && seaExcursionPackages > 0) {
            total += 680;
            seaExcursionPackages--;
        }
        
        if(package == "mountain" && mountainExcursionPackages > 0) {
            total += 499;
            mountainExcursionPackages--;
        }
    }

    if (seaExcursionPackages == 0 && mountainExcursionPackages == 0) {
        console.log("Good job! Everything is sold.");
    }
    
    console.log(`Profit: ${total} leva.`);

}

excursionSale([2, 2, "sea", "mountain", "sea", "sea", "mountain"]);
// excursionSale([3, 2, "sea", "mountain", "sea", "sea", "mountain", "mountain"]);
// excursionSale([6, 3, "sea", "mountain", "mountain", "mountain", "sea", "Stop"]);