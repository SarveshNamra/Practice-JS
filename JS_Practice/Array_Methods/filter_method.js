// ===== Creates a new array with all elements that pass the test implemented by the provided function. =====

/* IMP :- 
    Filter atleast returns a new array with elements that satisfy the condition in the callback function. 
    If no elements satisfy the condition, it returns an empty array. 
*/

let arr = [1, 2, 3, 4, 5];

let newArr1 = arr.filter((e) => {
        return e % 2 === 0
    }
);
let newArr2 = arr.filter(num => num > 3);

console.log(newArr1);
console.log(newArr2);