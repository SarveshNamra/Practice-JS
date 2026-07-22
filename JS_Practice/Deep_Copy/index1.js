/*
Using --> structuredClone() <-- for deep copy.

Pros:
    Handles nested objects and arrays
    Supports many built-in types like Map, Set, and Date

Cons:
    Doesn't clone functions
    Not available in very old JavaScript environments
*/


// ---------------- Object  ----------------

const person = {
    name: "John",
    address: {
        city: "Pune"
    }
};

const objCopy = structuredClone(person);

objCopy.address.city = "Mumbai";

console.log(person.address.city);
console.log(objCopy.address.city);

// ---------------- Array ----------------

const students = [
    { name: "Alice" },
    { name: "Bob" }
];

const arrCopy = structuredClone(students);

arrCopy[0].name = "Charlie";

console.log(students[0].name);
console.log(arrCopy[0].name);