// The Both are rest parameters, but the first one is a normal parameter and the second one is a rest parameter. 
// The rest parameter must be the last parameter in the function definition.

function restPara1 (x, ...y) {
    return y;
}

console.log(restPara1(1, 2, 3, 4, 5, "Hello"));

console.log(typeof restPara1(1, 2, 3, 4, 5, "Hello"));
console.log(typeof restPara1);

console.log(restPara1(1, 2, 3, 4, 5, "Hello")[0]);
console.log(restPara1(1, 2, 3, 4, 5, "Hello").length);

function restPara2 (...z) {
    return z;
}

console.log(restPara2(1, 2, 3, 4, 5, "Hello"));