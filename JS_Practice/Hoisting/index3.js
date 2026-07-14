// When a variable or function is declared using var, let, or const, it is moved to the top of the current scope. 
// This is called variable hoisting.

displayMyAge(); // This will hoist the function declaration but, becausse it is variable function, 
// it will not be hoisted and will throw an error if called before its declaration.

var age = 25;

var displayMyAge = function() {
    console.log("Age: ", age);

    var age = 30; // Scope of this variable is limited to the function, so it does not affect the global age variable.
    console.log("Age after function call and declaration inside the function: ", age);
}

console.log("Age before function call: ", age);

displayMyAge();