// let user = {
//     name: "John",
//     age: 30,
//     sayHi2(){
//         console.log("Hello CodeVerse");
//     }
// }
// user.sayHi = function() {
//     console.log("Hello")
// }
// user.sayHi();
// console.log(user)

// user2 = {
//     sayHi() {
//         console.log("Hello");
//     }
// }
// console.log(user2)

// let user3 = {
//     name: "John",
//     age: 30,

//     sayHiAgain(){
//         console.log(this.name)
//     }
// }
// user3.sayHiAgain();

// let user4 = {name: "John"};
// let admin = {name: "Admin"};

// function sayHi(){
//     console.log(this.name);
// }
// user4.f = sayHi;
// admin.f = sayHi;

// admin.f()
// user4.f();

// admin['f']();

// function sayHi3(){
//     console.log(this)
// }
// sayHi3()

let user6 = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => console.log(user6.firstName) // arrow function are special they don't have their own this. if we reference this from such a function it's taken from the outer "normal" function
        arrow();
    }

};

user6.sayHi(); //Ilya
