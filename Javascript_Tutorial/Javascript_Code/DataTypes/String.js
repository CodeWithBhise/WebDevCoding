let Single = 'Single-Quoted';
let Double = "double-quoted";
let backticks = `backticks`;

// Special Characters
let guestList = "Guests:\n * John\n * Pete\n *mary";
// console.log(guestList);

let str1 = "Hello\nWorld";
// console.log(str1);

let str2 = `Hello
World`;

// console.log(str1 == str2);
// console.log(str2.length);
// console.log(str2[0]);
// console.log(str2.at(0));

// console.log(str2[str2.length - 1]); // o
// console.log(str2.at(-1))

// console.log(str2[-2]); // undefined
// console.log(str2.at(-2)); //l

// for( let char of str2) {
//     console.log(char)
// }

// 
// strings are immutable :-  cannot change character

let str3 = 'Hi';

// str3[0] = 'h'; // error
// console.log(str3[0])
// str3 = 'h' + str3[1];
// console.log(str3)

// Changing the case
// console.log('Interface'.toUpperCase()); //convert into uppercase
// console.log('Interface'[0].toLowerCase()); //convert first letter to lowecase 

let sentence = " Hello my name is suraj bhise";

// console.log(sentence.indexOf("suraj")); // returns the index number
// console.log(sentence.indexOf("suri")); // returns -1 in case search is not found

// console.log(sentence.indexOf("e"));
// console.log(sentence.indexOf("bhise",6))

let target = "s";
let pos = 0;
while (true) {
    let foundpos = sentence.indexOf(target,pos);
    if (foundpos == -1) break;

    console.log(`found at ${foundpos}`)
    pos = foundpos + 1;
}

// includes, startsWith, endsWith
alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false

alert( "Widget".includes("id") ); // true
alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"

alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"let str = "stringify";

//Getting Substring
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0

alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"

let str = "stringify";
alert( str.slice(2) ); // 'ringify', from the 2nd position till the end

let str = "stringify";

// start at the 4th position from the right, end at the 1st from the right
alert( str.slice(-4, -1) ); // 'gif'

let str = "stringify";

// these are same for substring
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// ...but not for slice:
alert( str.slice(2, 6) ); // "ring" (the same)
alert( str.slice(6, 2) ); // "" (an empty string)

// Comparing strings
A lowercase letter is always greater than the uppercase:

alert( 'a' > 'Z' ); // true

Letters with diacritical marks are “out of order”:

alert( 'Österreich' > 'Zealand' ); // true
