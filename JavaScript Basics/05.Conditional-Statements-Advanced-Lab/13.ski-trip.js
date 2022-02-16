function skiTrip(stays, typeOfRoom, grade) {
    stays = Number(stays);
    typeOfRoom = String(typeOfRoom);
    grade = String(grade);

    let roomForOnePerson = 18;
    let apartment = 25;
    let presidentApartment = 35;
    let total = 0;

    if (stays < 10) {
        switch (typeOfRoom) {
            case "room for one person":
                total = (stays - 1) * roomForOnePerson;
                break;
            case "apartment":
                total = (stays - 1) * apartment;
                total -= total * .3; // after discount
                break;
            case "president apartment":
                total = (stays - 1) * presidentApartment;
                total -= total * .1; // after discount
            default:
                break;
        }
    } else if(stays > 10 && stays <= 15) {
        switch (typeOfRoom) {
            case "room for one person":
                total = (stays - 1) * roomForOnePerson;
                break;
            case "apartment":
                total = (stays - 1) * apartment;
                total -= total * .35; // after discount
                break;
            case "president apartment":
                total = (stays - 1) * presidentApartment;
                total -= total * .15; // after discount
            default:
                break;
        }
    } else {
        switch (typeOfRoom) {
            case "room for one person":
                total = (stays - 1) * roomForOnePerson;
                break;
            case "apartment":
                total = (stays - 1) * apartment;
                total -= total * .5; // after discount
                break;
            case "president apartment":
                total = (stays - 1) * presidentApartment;
                total -= total * .2; // after discount
            default:
                break;
        }
    }

    if(grade == "positive") {
        total += total * .25;
    }

    if(grade == "negative") {
        total -= total * .1;
    }
    console.log(total.toFixed(2));  

}

skiTrip("14", "apartment", "positive");
skiTrip("30", "president apartment", "negative");
skiTrip("12", "room for one person", "positive");
skiTrip("2", "apartment", "positive");