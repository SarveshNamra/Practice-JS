/*
Using --> JSON.parse(JSON.stringify()); <-- for deep copy.

Pros:
    Simple
    Works in older environments

Cons:
    Loses functions
    Converts Date objects to strings
    Doesn't support Map, Set, undefined, BigInt, etc.
*/

const person = {
    name: "ABC",
    age: 72,
    address: {
        city: "New York",
        state: "NY",
    },
};

console.log(person);

person.address.city = "Los Angeles";
console.log(person);

// Deep Copy
const copy = JSON.parse(JSON.stringify(person));
console.log(copy);

person.address.city = "San Francisco";
person.address.state = "CA";
person.age = 73;
console.log(person);

console.log(copy);