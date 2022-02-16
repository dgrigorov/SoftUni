function toyShop(tripPrice, jigsaw, dolls, bears, minions, trucks) {
    
    let jigsawPrice = 2.6;
    let dollsPrice = 3;
    let bearPrice = 4.1;
    let minionPrice = 8.2;
    let truckPrice = 2;

    let totalCount = Number(jigsaw) + Number(dolls) + Number(bears) + Number(minions) + Number(trucks);
    let priceMultiplier = 1;
    if (totalCount > 50) {
        priceMultiplier = .75;
    }

    let total = jigsaw * Number(jigsawPrice) + dolls * Number(dollsPrice) +
                bears * Number(bearPrice) + minions * Number(minionPrice) +
                trucks * Number(truckPrice);

    total *= priceMultiplier;

    let finalMoney = total - (total * .1);
    
    if (finalMoney > tripPrice) {
        console.log("Yes! " + (finalMoney - tripPrice).toFixed(2) + " lv left.");
    } else {
        console.log("Not enough money! " + (tripPrice - finalMoney).toFixed(2) + " lv needed.");
    }
}

toyShop(40.8, 20, 25, 30, 50, 10);
toyShop(320, 8, 2, 5, 5, 1);