// let message = "Hello";
// message = 123456;
// console.log(message)

// //Numbers
// let n = 123;
// n = 12.345;
// console.log(n)

// console.log(1/0)
// console.log(Infinity)
// console.log("not a number"/67);
console.log(NaN + 1);
console.log(3*NaN);
console.log(NaN);
const bigInt = 1234567890123456789012345678901234567890123456789012345678901234567890n;
console.log(bigInt)
//String
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
console.log(phrase)

let name = "John";
console.log(`Hello, ${name}!`);
console.log(`The result is${1+2}`);


//Boolean
let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4>1;
console.log(isGreater)


// Null
// let age = null;
// console.log(age);

//Undefined
// let age;
// console.log(age);
let age = 100;
age = undefined;
console.log(age)

// typeof
typeof undefined // undefined
typeof 0 //"Number"
typeof 10n //Bigint
typeof true //"Boolean";
typeof "Foo" //"String";
typeof Symbol("id") //"symbol"
typeof Math //"Object"
typeof null //Object
typeof alert // "Function"
