// //Javascript Objects
// let car = {type:"Fiat",model:"500",color:"White"}
// console.log(car)
// const person = {
//     dog:"कुत्रा",
//     firstname:"John",
//     lastName:"Doe",
//     age:50,
//     eyeColor:"Blue",
//     fullname: function(){
//         return this.firstname+" "+this.lastName;//this refers to Object Person
//     }
// }
// console.log(person.dog)
// let name = person.fullname()
// console.log(name)

// // let user = new Object(); //"Object constructor" Syntax
// //let user = {}; //"object literal" syntax

// let user = { // an object
//     name: "John", //by key "name" store value "John"
//     age: 30,  // by key "age" store value 30
//     "likes birds": true
// };

// console.log(user.name)
// console.log(user.age)

// user.isAdmin = true;

//delete operator
// delete user.age
// console.log(user.age)
// let fruit = "Apple";
// let bag = {
//     [fruit]: 5, //the name of the property is taken from the variables fruit
// }
// console.log(bag.Apple);

// let Girls = "Vaibhav";
// let Schools = {};

// console.log(Schools[Girls] = 5);

// let fruit = 'apple';
// let bag = {
//     [fruit + 'Computers']: 5
// }
// console.log(bag);

// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age,
//     };
// }

// let user = makeUser("John", 30);
// console.log(user)

// let obj = {};
// obj._proto_ = 5; // assign a number
// console.log(obj._proto_)

// let user = {name: "John", age:30};

// console.log("age" in user);

// for(key in object) {
//     // executes the body for each key among objects properties
// }

let user = {
    name: "John",
    age:30,
    isAdmin: true
};

for (let key in user){ //key we can use prop
    console.log(key) //name, age, isAdmin
    // values for the keys
    console.log(user[key])
}

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,,
    "1":"USA"
};

for (let code in codes) {
    console.log(code);
}
