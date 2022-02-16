function birthdayParty(input) {
    input = Number(input);

    let cake = input * 0.2;
    let drinks = cake - (cake * 0.45);
    let animator = input * 1/3;
    let total = input + cake + drinks + animator;
    console.log(total);
}

birthdayParty("2250");