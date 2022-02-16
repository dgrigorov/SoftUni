function charityCampaign(campaignDays, bakers, cakes, waffles, pancakes) {
    campaignDays = Number(campaignDays);
    bakers = Number(bakers);
    cakes = Number(cakes);
    waffles = Number(waffles);
    pancakes = Number(pancakes);

    let cakesAmountPerDayPerBakers = cakes * 45;
    let wafflesAmoutnPerDayPerBakers =  waffles * 5.8;
    let pancakesAmoutnPerDayPerBakers =  pancakes * 3.2;

    let totalPerDay = (cakesAmountPerDayPerBakers + wafflesAmoutnPerDayPerBakers + pancakesAmoutnPerDayPerBakers) * bakers;
    let totalCampaign = totalPerDay * campaignDays;
    let total = totalCampaign - (totalCampaign * 1/8);

    console.log(total.toFixed(2));
}

charityCampaign("23","8","14","30","16");