// ===== Creates a new array with the results of calling a provided function on every element in the calling array. =====

let arr = [1, 2, 3, 4, 5];

let newArr1 = arr.map((e) => {
    return e * 2
});
let newArr2 = arr.map(num => num + 1);

console.log(newArr1);
console.log(newArr2);

// ************ I M P ************

let newArr3 = arr.map((e) => e > 2);

console.log(newArr3);


let newArr4 = arr.map((e, index) => {
    return e + index;
});

console.log(newArr4);