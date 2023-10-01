// Numbers
let billion = 100000000;

let billion2 = 1_000_000_000;
console.log(billion2);

let billion3 = 1e9;
console.log(billion3);
console.log(7.3e9);
console.log(1e3 === 1 * 1000);

console.log(2e9);

let mcs = 189e-6;
console.log(mcs)

// Hex, binary, octal numbers

console.log(0xff); // 255
console.log(0xFF); // 255 

let a = 0b111111111; // binary form of 255
let b = 0o377; // octal form of 255

console.log(a == b);

// toString(base)
let num = 255;
console.log(num.toString(16));
console.log(num.toString(2));

console.log(123456..toString(36)); // 2n9c
// Math.round
let num2 = 1.23456;
console.log(Math.round(num2 * 100) / 100 );
num2 = 12.34;
console.log(num2.toFixed(1));

// Parseint ParseFloat
console.log(+"100px"); //NaN

console.log(parseInt('100px')); //100
console.log(parseFloat('12.5em')); //12.5

console.log(parseInt('12.3')) // 12, only the iinteger part is returned
console.log(parseFloat('12.3.4')); // 12.3, the second point stops the reading

console.log(parseInt('a123')); // NaN, the first symbol stops the process

//Math.random
console.log(Math.random()); //0 to 1
console.log(Math.random()); //0 to 1

console.log(Math.max(3, 5, -10, 0, 1)); //maximum
console.log(Math.min(1, 2))// minimum

console.log(Math.pow(2, 10)); // 2 in power 10 = 1024
