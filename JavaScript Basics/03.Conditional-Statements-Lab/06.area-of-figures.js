function areaOfFigures(figure, inputA, inputB) {
    let area;

    switch (figure) {
        case "square":
            area = inputA * inputA;
            break;
        case "rectangle":
            area = inputA * inputB;
            break;
        case "circle":
            area = Math.pow(inputA, 2) * Math.PI;
            break;
        default:
            area = (inputA * inputB) / 2;
            break;
    }

    console.log(area.toFixed(3));
}

areaOfFigures("square", 5);
areaOfFigures("rectangle", 7, 2.5);
areaOfFigures("circle", 6);
areaOfFigures("triangle", 4.5, 20);