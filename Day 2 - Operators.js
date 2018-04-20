//DAY 2: OPERATORS

//Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.

function main(mealCost, tipPercent, taxPercent) {
    var tipAmount = mealCost * (tipPercent/100);
    var taxAmount = mealCost * (taxPercent/100);
    var totalCost = Math.round(mealCost + tipAmount + taxAmount);
    console.log('The total meal cost is ' + totalCost + ' dollars.')
};