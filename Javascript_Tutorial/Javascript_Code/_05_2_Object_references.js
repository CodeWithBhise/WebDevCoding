// let message = "Hello!";
// let phrase = message
// console.log(phrase)
// let user = {
//     name: "John"
// }

// console.log(user.name)
// let admin = user;
// admin.name = 'pete';
// console.log(user.name)

// let a = {};
// let b = a;
// console.log(a == b);
// console.log(a ===b );

let a = {};
let b = {}; // two independent objects
console.log(a == b); // false

// let user  = {
//     name: "John",
//     age: 30
// };

// let clone = {}; // the new empty objects

//let's copy all user properties into it

// for(let key in user){
//     clone[key] = user[key];
// }

// clone.name = "Pete";
// console.log(user.name);

let user = {name: "John"};

let permissions1 = { canView: true};
let permissions2 = { canEdit: true};

Object.assign(user, permissions1, permissions2);
console.log(user.name);
console.log(user.canView);
console.log(user.canEdit);

Object.assign(user, {name:"Pete"});
console.log(user.name)

let user2 = {
    name:"Suraj",
    age:21
};

let clone = Object.assign({}, user2);
console.log(clone.name);
console.log(clone.age)

// Nested Cloning

let user3  = {
    name: "John",
    sizes: {
        height:182,
        width: 50
    }
};

console.log(user3.sizes.height)
let user4 = {
    name:"Tony",
    sizes: {
        height: 185,
        width: 50
    }
 };
// let clone1 = Object.assign({}, user4)
// console.log(user4.sizes === clone1.sizes)

// user4.sizes.width = 60; //changes a property from one place
// console.log(clone1.sizes.width);

// structuredClone creates seperate Object
// let clone2 = structuredClone(user4);
// console.log( user4.sizes === clone2.sizes); // false different objects
// user4.sizes.width = 60;
// console.log(clone2.sizes.width)
// console.log(clone2)
// console.log(user4)

let user5 = {};
user5.me = user5;
let clone3 = structuredClone(user5);
console.log(clone3.me === clone3);