const obj = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const objString = JSON.stringify(obj);
console.log(objString);

const obj2 = JSON.parse(objString);
console.log(obj2);

const obj3 = JSON.parse('{"name":"John","age":30,"city":"New York"}');
console.log(obj3);