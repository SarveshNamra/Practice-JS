let obj1 = {
    name: "Alice",
    introduce: function () {
        console.log(`Hi, I'm ${this.name}`);
    },
};

console.log("Begin");

setTimeout(obj1.introduce, 3 * 1000);

Promise.resolve().then(() => {
    console.log("Promise resolved");
});

// Call Stack -> Browser starts timer and holds the parameter (might be a function)
// in memory --(3 sec expires)-->1. Microtask Queue (High priority and it takes promises, etc in it) 
// -> 2. CallBack Queue (Holds the function like - setTimeout, etc in FIFO order)
// -> Event Loop (It checks if the Call Stack is empty and Microtask Queue has any function to execute)
// -> Call Stack (if empty) -> Call the function

setTimeout(() => {
    console.log("Timeout callback executed");
}, 0);

console.log("End");

// Here even though the setTimeout and the Promise are executed in the next event loop, 
// the setTimeout callback is executed first because it is added to the CallBack Queue and the Promise is added to the microtask queue.