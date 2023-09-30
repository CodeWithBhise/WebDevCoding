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