// Scope and Hoisting -> 
// Scope and Hoisting in JavaScript refers to the process of moving variable and function declarations 
// to the top of their containing scope,
// allowing them to be accessed and used before they are defined.


console.log("Age: ", age);

var age = 30;

displayAge();

console.log("Age after function call: ", age);

function displayAge() {
    console.log("Inside function, Age: ", age);
    var age = 35;
    console.log("Inside function after declaration, Age: ", age);
}