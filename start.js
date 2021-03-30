//Q1
const totalsold = 6450;
const price = 15;
console.log(`${totalsold / price} tickets were sold`);

//Q2
const weeklyincome = 500;
const weeks = 52;
console.log(`Silvia makes ${weeklyincome * weeks} $ a year.`);

//Q3
const qone = 17;
const qtwo = 30;
console.log(qtwo / 100 * qone + "%");

//Q4
const squareSideslenght = 4.75;
const squareSides = 4;
console.log(squareSideslenght * squareSides + "cm");

//Q5
const triangleSide1 = 5;
const triangleSide2 = 6;
const triangleSide3 = 7;
console.log(triangleSide1 + triangleSide2 + triangleSide3 + "cm");

//Q6
const height = 5;
const lenght = 5;
console.log(`Area of a square = ${height * lenght}cm`);

//Q7. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
// Heron's Formula
const triSideLength1 = 5;
const triSideLength2 = 6;
const triSideLength3 = 7;
const halfPerimeter = (triSideLength1 + triSideLength2 + triSideLength3) / 2;
const areaTriangle = Math.sqrt(halfPerimeter * (halfPerimeter - triSideLength1) * (halfPerimeter - triSideLength2) * (halfPerimeter - triSideLength3));
console.log(`Area of triangle = ${areaTriangle}cm²`);

//Q8
const cube = 9
console.log(`The Volume is  ${cube * cube * cube}cm`);

//Q9
const bill1 = 22.35
const bill2 = 26.67
const bill3 = 35.92
console.log(`The total amount is €${bill1 + 10 / 100 * bill1 + bill2 + 15 /100 *bill2 + bill3 + 20/100 * bill3}`);

//Q10
const hours = 58.5;
const days = 10;
console.log(`The avg. daily hours is ${hours/days} hours`);

//Q11
const x = 75 + 70 + 85 + 90 + 100;
const y = 85;
const d = 6
console.log(`Score in the sixth test: ${y*d-x}`);

//Q12
const goalavg = 80
const currentavg = 78
const totalas = 9
const completedas = 8
console.log(`James needs a minimum of ${goalavg * totalas - currentavg*completedas}% to get an 80% average`);