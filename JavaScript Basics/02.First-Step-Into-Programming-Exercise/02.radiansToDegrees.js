function radiansToDegrees(input) {
    var radians = Number(input);
    var degrees = radians * 180 / Math.PI;

    console.log(degrees.toFixed(0));
}

radiansToDegrees(6.2832);