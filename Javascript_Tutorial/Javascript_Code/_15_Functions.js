let userName = 'John';
// Function Declaration
function showMessage() {
    console.log("Hello world")
}

// Local Variables
function showMessage(){
    let message = "Hello, I am Javascript!";
    console.log(message)
}

// showMessage();
// console.log(message)


function showMessage(){
    let message = 'Hello, '+userName;
    console.log(message);
}
    showMessage();

function sum(a,b){
    return a+b;
}
console.log(sum(45,5))