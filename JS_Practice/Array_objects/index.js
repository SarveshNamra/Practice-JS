let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

fruits.push("grapes");
console.log(fruits);

const data = fruits.pop();
console.log(data);

let index = fruits.indexOf("cherry");

if (index !== -1) {
    fruits.splice(index, 1);
}
console.log(fruits);

let idx = fruits.indexOf("Apple");

if (idx !== -1) {
    fruits.splice(idx, 1);
}
console.log(fruits);

let vegetables = ["carrot", "broccoli", "spinach", "cauliflower"];

let fruitVegetable = fruits.concat(vegetables);
console.log(fruitVegetable);

let addMoreFruits = [...fruits, "kiwi", "mango"];
console.log(addMoreFruits);