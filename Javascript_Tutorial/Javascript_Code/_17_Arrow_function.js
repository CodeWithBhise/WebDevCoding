//Arrow function
// let func = (arg1, arg2,...argN)=>expression;
// let func = function(arg1, arg2, ...,argN){
//     return expression;
// }

let sum = (a,b)=> a + b;

console.log(sum(3,3))

let double = n => n*2;
console.log(double(3))

let sayHi = () => console.log("Hello!");
// console.log(sayHi())
sayHi()
let age = 18;
let welcome = (age < 18)?
()=> console.log('Hello!') :
()=> console.log("Greetings!");

welcome()

let sub = (a, b) => {
    let result = a - b;
    return result;
}
console.log(sub(2,3))
console.log(typeof null == "object");