function hotelRoom(month, nights) {
    month = String(month);
    nights = Number(nights);

    let studio, apartment;

    if(nights > 0 && nights < 200) {
        switch (month) {
            case "May":
            case "October":
                if(nights > 7 && nights < 14) {
                    studio = (50 - (50 * .05)) * nights; // 5% discount
                    apartment = 65 * nights; // 65lv
                } else if(nights > 14) {
                    studio = (50 - (50 * .3)) * nights; // 30% discount
                    apartment = (65 - (65 * 0.1)) * nights; // 10% discount
                } else {
                    studio = 50 * nights; // 50 lv
                    apartment = 65 * nights; // 65lv
                }
                
                break;
            case "June":
            case "September":
                if(nights > 14) {
                    studio = (75.2 - (75.2 * .2)) * nights; // 20% discount
                    apartment = (68.7 - (68.7 * .1)) * nights; // 10% discount
                } else {
                    studio = 75.2 * nights; // 75.20 lv
                    apartment = 68.7 * nights; // 68.70 lv
                }
                break;
            case "July":
            case "August":
                if (nights > 14) {
                    apartment = (77 - (77 * .1)) * nights;
                } else {
                    apartment = 76 * nights; // 76 lv
                }
                studio = 76 * nights; // 77 lv
            default:
                break;
        }

        console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
        console.log(`Studio: ${studio.toFixed(2)} lv.`);
    }
}

hotelRoom("May", 15);
hotelRoom("June", 14);
hotelRoom("August", 20);