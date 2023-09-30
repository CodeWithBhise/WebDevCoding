//Arithmatic Operation
let x = 100+200;//addition
let y = 100-200;//subtraction
let z = 100*200;//Multiplication
let E = 3**2;//Exponentiation
let D = 4/5; //Division
let M = 12%2;//Modulus
let I = 12;
I++
I--
console.log(I);

// Assignment Operators
let equal = 45;//=use to assign value to a variable
equal+=5;//+=adds value to variable :- 45 = 45+5;
equal-=5;//+=subtracts value from variable 45 = 45-5;
equal*=2;//ssame as above
equal/=5;
equal**=8;
console.log(4**(1/2))
// let a = 1;
// let b = 2;

// let c = 3-(a=b+1);
// console.log(a);
// console.log(c)

// Chaining Assignments
let a,b,c;
a = b = c = 2+2;
console.log(a)
console.log(b)
console.log(c)
//Logical Assignment Operators
// Logical OR ||
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false)

let hour = 12;
let isWekend = true;
if(hour < 10 || hour > 18 || isWekend){
    console.log('The office is closed');
}

// Logicak AND &&
let result = a && b;
console.log(true && true)
console.log(false && true)
console.log(true && false)
console.log(false && false)

console.log(!true);
console.log(!0);
