const user = {
    name: "ABC",
    age: 29,
    password: "1234",
};

const myProxy = new Proxy(user, {
    get(target, prop) {
        console.log(target);
        console.log(prop);

        if (prop === "password") {
            throw new Error("Access Denied");
        }

        return target[prop];
    },
    set(target, prop, value) {
        if (prop === "password") {
            throw new Error("Access Denied");
        }
        target[prop] = value;
        return true;
    },
});


console.log(myProxy.name);
// console.log(myProxy.password);

console.log(myProxy.age = 30);
console.log(myProxy.age);

// console.log(myProxy.password = "5678");