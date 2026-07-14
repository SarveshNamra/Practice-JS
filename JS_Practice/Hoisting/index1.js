// Hoisting ->
// Hoisting in JavaScript refers to the process of moving variable and function declarations to the top of their containing scope,
// allowing them to be accessed and used before they are defined.

// Global Execution Context (GEC) is the default execution context in JavaScript. 
// It is created when the JavaScript engine starts executing the code. 
// The GEC is responsible for managing the global scope and variables, functions, and objects defined in that scope.

// GEC is created in two phases: the creation/memory phase and the execution/code phase.

let age = 25;
console.log("Age: ", age);

console.log("Weight: ", weight);

let weight = 70;

console.log("Height: ", height);

const height = 180;