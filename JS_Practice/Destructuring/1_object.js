let obj = {
    name: "ABC",
    address: {
        city: "Lu Lu",
        state: "Pu Pu",
        street: "123 Main St"
    },
    age: 12,
};

// Destructuring assignment to extract values from the object

let { name, address: { city, state, street }, age } = obj; 
console.log(name);
console.log(city);

let {name: fullName, address: { city: town, state: province, street: road }, age: years} = obj;
console.log(fullName);
console.log(town);
console.log(years);

let { name: myName, myAddress } = obj;
console.log(myName); // ABC
console.log(myAddress); // undefined, because myAddress does not exist in obj

let obj2 = {
    ...obj,
    profession: "Engineer with the degree of B.Tech in Printing Technology -- LOL! --",
};

let { address, profession } = obj2;
console.log(address);
console.log(profession);