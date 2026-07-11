
// Task 1: Create an object with a method that uses the `this` keyword to access its properties. 
// Then, use the `call()` method to --> invoke the method <-- with a different object as its context.

let person1 = {
    name: "John",
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
};

person1.greet();

let person2 = {  
    name: "Don",
    age: 25,
};

person1.greet.call(person2);

// Task 2: Create an object with a method that uses the `this` keyword to access its properties. 
// Then, use the `bind()` method to --> create a new function <-- that is permanently bound to a different object.

let usingBind = {
    name: "Bind",
    age: 20,
}

let person3 = person1.greet.bind(usingBind);

console.log(person3); // This will log the function definition of person1.greet, but bound to person2's context.

console.log(person3()); // This will log the greeting message using person2's properties, as the function is bound to person2's context.

// This is how we techically call the function.
person3(); // This will log the greeting message using person2's properties, as the function is bound to person2's context.