// Temporal Dead Zone (TDZ) ->
// The TDZ is a temporary zone in JavaScript where variables and functions are not accessible before they are declared.
// It is created when a variable or function is declared using -> let or const <- , but before it is initialized.
// This zone exists only during the execution of the code block where the variable or function is declared.



// *** Note *** : Let and const variables are hoisted to the top of their block scope, 
// but they are not initialized until the line of code where they are declared.



// Dead Zone starts from the beginning of the block until the line where the variable or function is declared and initialized.
console.log("Age: ", age);

// Dead Zone lies till this line
let age = 30;