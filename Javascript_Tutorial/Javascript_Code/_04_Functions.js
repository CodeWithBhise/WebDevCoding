// Syntax
// function name(parameter1, parameter2,parameter3){
//     //Code to be executed
// }
function myFunction(p1, p2){
    return p1 * p2;
}
console.log(myFunction(23,56));

//Convert Fharenheit to Celsius
function toCelsius(Fharenheit){
    return (5/9)*(Fharenheit-32);
}
let value = toCelsius(77);
console.log(value)