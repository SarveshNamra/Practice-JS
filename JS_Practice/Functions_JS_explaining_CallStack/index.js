let obj1 = {
    name: "Alice",
    introduce: function () {
        console.log(`Hi, I'm ${this.name}`);
    },
};

console.log("Begin");

setTimeout(obj1.introduce, 3 * 1000);  
// Call Stack -> Broweser starts timer and holds the parameter(might be a function, variable, etc.)
// in memory --(3 sec expires)--> CallBack Queue (Holdes the function in FIFO order) 
// -> Event Loop (It checks if the Call Stack is empty and CallBack Queue has any function to execute)
// -> Call Stack (if empty) -> Call the function

console.log("With the help of bind");

setTimeout(obj1.introduce.bind(obj1), 3 * 1000);
// Here, we are using the bind() method to create a new function that is permanently bound to obj1's context.
// As previously the context of the function was lost when it was passed to setTimeout, but now with bind, it will always refer to obj1.

console.log("End");