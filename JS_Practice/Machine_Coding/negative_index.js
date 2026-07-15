const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function getValue(arr) {
    return new Proxy(arr, {
        get(target, prop) {
            const index = Number(prop);     // Convert the property to a number
            if (index < 0) {
                return target[target.length + index];
            }
            return target[index];
        },
        set(target, prop, value) {
            const index = Number(prop);
            if (index < 0) {
                target[target.length + index] = value;
            } else {
                target[index] = value;
            }

            return true;
        }
    });
};

const proxyArr = getValue(arr);

console.log(getValue(arr, -1));     
// This will log the proxy object itself, not the value at index -1 
// because the getValue function only returns the proxy object. To access the value at index -1, 
// you need to call the proxy with the index -1.

console.log(proxyArr[-1]);  // Get the value at index -1


// arr.forEach((value, index) => console.log(value));

// console.log(arr);

proxyArr[-1] = 10;     // Set the value at index -1
console.log(proxyArr[-1]);

console.log(proxyArr);
console.log(arr);

// --> proxyArr and arr are two different objects <--. The proxyArr is a proxy object that wraps around the original arr. 
// When you modify proxyArr, it affects the underlying arr because the proxy forwards the operations to the original array. 
// However, they are still distinct objects in memory and this means that if you were to 
// compare proxyArr and arr using strict equality (===), it would return false.

// This is deep copy or shallow copy?
// The proxy does not create a deep copy or shallow copy of the original array. 
// It simply creates a proxy object that forwards the operations to the original array.