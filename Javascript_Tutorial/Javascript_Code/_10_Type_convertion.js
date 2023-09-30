//String Convertion
let value = true;
console.log(value); //Boolean

value = String(value);
console.log(typeof value)

//Numeric Converition
console.log("6"/"2")
let str = "123";
console.log(typeof str);
let Num = Number(str);
console.log(typeof Num)

// Numeric Convertion Rules
console.log(Number("   123   "));
console.log(Number("123z"));
console.log(Number(true));
console.log(Number(false));

// Boolean Convertion
console.log(Boolean(1))
console.log(Boolean(0))

console.log(Boolean("Hello"));
console.log(Boolean(" "));
