let arr = [1, 2, 3, 4, 5];

let newArr1 = arr.map((e) => {
    return e * 2
});
let newArr2 = arr.map(num => num + 1);  

console.log(newArr1);
console.log(newArr2);