let arr = [1, 2, 3, 4, 5];

let newArr1 = arr.reduce((accumulator, currentValue) => (accumulator + currentValue), 0);
let newArr2 = arr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue; 
}, 1);

console.log(newArr1);
console.log(newArr2);