const obj1 = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
    }
}

console.log(" obj1 -> ", obj1);

const copyObj1 = { ...obj1 };

copyObj1.address.city = "Los Angeles";  
// All the nested objects are still pointing to the same reference in memory, 
// so changing the city in copyObj1 will also change it in obj1.


copyObj1.age = 35;
// Changing the age in copyObj1 will not affect obj1, 
// because age is a primitive value and is copied by value.

console.log(" obj1 -> ", obj1);
console.log(" copyObj1 contains shallow copy of obj1 -> ", copyObj1);

console.log("");

const obj2 = obj1;
console.log(" obj2 = obj1 -> ", obj2);

const copyObj2 = { ...obj2 };

// Similar to above
copyObj0.address.city = "San Francisco";
copyObj0.age = 40;

console.log(" obj2 -> ", obj2);
console.log(" copyObj2 contains shallow copy of obj2 -> ", copyObj2);

const obj3 = {
    name: "Shona",
    age: 25,
}

console.log("");
const copyObj3 = { ...obj1, ...obj3 };
console.log(" copyObj3 contains shallow copy of obj1 and obj3 -> ", copyObj3);