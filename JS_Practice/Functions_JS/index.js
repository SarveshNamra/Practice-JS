function namePlease(name) {
    console.log(`Hello ${name}`);
}

namePlease("John");
namePlease("Jane");

let globalVariable = "I am a global variable";

function modifyGlobalVariable() {
    globalVariable = "I am modified";
    let blockScopedVariable = "I am block-scoped";
    console.log(blockScopedVariable);
}

modifyGlobalVariable();


// IIFE (Immediately Invoked Function Expression) - A function that is called immediately after it is defined
// and are used once.
let config = (function () {
    let settings = {
        theme: "light",
    };
    return settings;
})();

// IIFE And it is an arrow function that is called immediately after it is defined.
(() => {})();

// This is an arrow function that is asynchronous and takes two parameters, req and res. 
// It logs "Hello World" to the console.
const fn = async (req, res) => (console.log("Hello World")); 