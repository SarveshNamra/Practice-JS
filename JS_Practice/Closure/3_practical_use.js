// Creating utility function to add two numbers

function adder(x) {
    function add(y) {
        console.log(x + y);
    }
    return add;
}

const addTo10 = adder(10);

addTo10(5);
addTo10(3);