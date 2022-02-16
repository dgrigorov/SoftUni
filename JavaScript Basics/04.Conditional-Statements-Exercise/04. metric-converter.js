function metricConverter(input, unit1, unit2) {
    input = Number(input);
    unit1 = String(unit1);
    unit2 = String(unit2);

    let result;

    if (unit1 === "mm") {
        if (unit2 === "m") {
            result = input / 1000;
        } else if(unit2 === "cm") {
            result = input / 10;
        } else {
            result = input;
        }
    } else if(unit1 === "cm") {
        if (unit2 === "m") {
            result = input / 100;
        } else if(unit2 === "mm") {
            result = input * 10;
        } else {
            result = input;
        }
    } else {
        if (unit2 === "cm") {
            result = input * 100;
        } else if(unit2 === "mm") {
            result = input * 1000;
        } else {
            result = input;
        }
    }

    console.log(result.toFixed(3));
}

metricConverter(12, "mm", "m");
metricConverter(150, "m", "cm");
metricConverter(45, "cm", "mm");