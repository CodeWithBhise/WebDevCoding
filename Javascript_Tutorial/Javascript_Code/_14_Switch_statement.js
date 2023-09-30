let a = 2 + 2;
switch (a) {
    case 3:
        console.log('Too Small');
        break;
    case 4:
        console.log('Exactly!');
        break;
    case 5:
        console.log('Too big');
        break;
    default:
        console.log("I don't know such values");
}

let c = "1";
let b = 0;

switch (+c){
    case b+1:
        console.log("this runs, because +a is 1, exactly equals b+1");
        break;

    default:
        console.log("this dosen't run");
}