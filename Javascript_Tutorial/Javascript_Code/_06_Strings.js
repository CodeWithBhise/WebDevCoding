let text = "John Doe";
let length = text.length;
console.log(length);
//String Concatenation With binary +
let S = "my"+"String";
console.log(S)

console.log('1'+2);
console.log(2 + '1');

console.log(2+2+"1");
console.log('1'+2+2);

console.log(6 - '2');
console.log('8'/'2');

// Numeric Convertion Unary
let x = 1;
console.log(+x) //1 No effect on numbers

let y = -2;
console.log(+y)

//Converts non-numbers
console.log(+true);
console.log(+"");

let apples = "2";
let Oranges = "3";
console.log(apples + Oranges);
console.log(+Oranges + +apples);
//String Methods
let text2 = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);