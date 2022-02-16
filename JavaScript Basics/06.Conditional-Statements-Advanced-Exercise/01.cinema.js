function cinema(type, rows, cols) {
    let income;

    if (type == "Premiere") {
        income = rows * cols * 12.00;
    } else if(type == "Normal"){
        income = rows * cols * 7.50;
    } else {
        income = rows * cols * 5.00;
    }
    
    console.log(`${income.toFixed(2)} leva`);
}

cinema("Premiere", 10, 12);
cinema("Normal", 21, 13);
cinema("Discount", 12, 30);