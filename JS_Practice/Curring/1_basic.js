function adder(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }
}

let add = adder(2)(3)(4);

console.log(add);



const multiply = (a) => (b) => (c) => a * b * c;
console.log(multiply(2)(3)(4));