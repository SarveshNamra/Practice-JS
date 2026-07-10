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
let config = (function () {
    let settings = {
        theme: "light",
    };
    return settings;
})();