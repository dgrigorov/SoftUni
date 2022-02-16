function footballKit(tshirtPrice, priceToWinBall) {
    tshirtPrice = Number(tshirtPrice);
    priceToWinBall = Number(priceToWinBall);

    let shorts = tshirtPrice * .75;
    let socks = shorts * .2;
    let footballBoots = (tshirtPrice + shorts) * 2;

    let total = tshirtPrice + shorts + socks + footballBoots;
    let totalAfterDiscount = total - (total * .15);

    if (totalAfterDiscount > priceToWinBall) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${totalAfterDiscount.toFixed(2)} lv.`);
    } else {
        let needed = priceToWinBall - totalAfterDiscount;
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${needed.toFixed(2)} lv. more.`);
    }
}

// footballKit(25, 100);
// footballKit(55, 310);
footballKit(59.99, 500);