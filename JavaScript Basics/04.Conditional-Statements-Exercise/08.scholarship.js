function scholarship(income, averageSuccess, minimalSalary) {

    income = Number(income);
    averageSuccess = Number(averageSuccess);
    minimalSalary = Number(minimalSalary);

    let socialScholarship = 0;
    let excellentScholarship = 0;

    if (income < minimalSalary) {
        if (averageSuccess > 4.5) {
            socialScholarship = minimalSalary * .35;
        }
    }

    if (averageSuccess >= 5.5) {
        excellentScholarship = averageSuccess * 25;
    }

    if (socialScholarship > excellentScholarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else if(excellentScholarship >= socialScholarship) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);
    } else {
        console.log("You cannot get a scholarship!");
    }
}

scholarship("480.00", "4.60", "450.00");
scholarship("300.00", "5.65", "420.00");