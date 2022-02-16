function calculateYardGreening(area) {
    let total = area * 7.61;
    let discount = total * .18;
    let finalPrice = total - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount } lv.`);
}

calculateYardGreening("550");