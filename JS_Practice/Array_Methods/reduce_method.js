// ===== Executes a reducer function on each element to condense the entire array down to a single value. =====

// The first time that the callback is run, accumulator and currentValue can be one of two values :- 
// 1) If initialValue is provided in the call to reduce, then accumulator will be equal to initialValue 
// and currentValue will be equal to the first value in the array. 
// 2) If no initialValue is provided, then accumulator will be equal to 
// the first value in the array and currentValue will be equal to the second.

let arr = [2, 3, 4, 5, 6];

let newArr1 = arr.reduce((accumulator, currentValue) => (accumulator + currentValue), 0);
let newArr2 = arr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue; 
}, 1);

console.log(newArr1);
console.log(newArr2);