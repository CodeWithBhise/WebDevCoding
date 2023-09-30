// Constructor, Operator "New"
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");
// console.log(user)
console.log(user.name);
console.log(user.isAdmin);

console.log(User());
console.log(new User("Suraj"))

function user2(name) {
    if (!new.target) {//if you run me without new 
        return new User(name) //.. I will add new 
    }
    this.name = name;
}

let john = user2("John"); // redirects call to new usr
console.log(john.name);


// return in Objects
function BigUser() {
    this.name = "John";

    return {name: "GodzZilla"}; //returns this object
}

function SmallerUser() {
    this.name = "John";
    return; // <-- return this
}
console.log(new SmallerUser().name)
console.log(new BigUser().name)

function User3(name) {
    this.name = name;
    this.sayHi = function(){
        console.log("My Name is: " + this.name);
;;    }
}

let johnWick = new User3("John Wick");
johnWick.sayHi(); // My name is: john