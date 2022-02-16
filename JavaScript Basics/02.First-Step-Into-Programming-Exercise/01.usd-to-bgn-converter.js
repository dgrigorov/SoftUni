function usdToBgnConverter(input) {
    let usd = Number(input);
    let bgn = Number(usd * 1.79549);
    console.log(bgn);
}

usdToBgnConverter(100);