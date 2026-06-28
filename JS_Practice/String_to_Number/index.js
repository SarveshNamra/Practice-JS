let num = "24";

console.log(typeof num);

// This 1st method is the standard way to convert a string to a number
let convertedNum0 = Number(num);
console.log(" convertedNum0 -> ", convertedNum0);

let convertedNum1 = +num;
console.log(" convertedNum1 -> ", convertedNum1);

let convertedNum2 = parseInt(num);
console.log(" convertedNum2 -> ", convertedNum2);

let convertedNum3 = parseFloat(num);
console.log(" convertedNum3 -> ", convertedNum3);


/* ============================================================================== */

let num2 = "a24b";

console.log(typeof num2);

let convertedNum4 = Number(num2);
console.log(" convertedNum4 -> ", convertedNum4);

let convertedNum5 = +num2;
console.log(" convertedNum5 -> ", convertedNum5);

let convertedNum6 = parseInt(num2);
console.log(" convertedNum6 -> ", convertedNum6);

let convertedNum7 = parseFloat(num2);
console.log(" convertedNum7 -> ", convertedNum7);