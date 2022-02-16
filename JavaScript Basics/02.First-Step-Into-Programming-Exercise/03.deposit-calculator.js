function depositCalculator(deposit, period, interest) {
    deposit = Number(deposit);
    period = Number(period);
    interest = Number(interest);

    var totalInterest =  deposit * (interest / 100); 
    totalInterest = totalInterest / 12;

    var total = deposit + period * totalInterest;
    
    console.log(total);
}

depositCalculator("200", "3", "5.7");