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