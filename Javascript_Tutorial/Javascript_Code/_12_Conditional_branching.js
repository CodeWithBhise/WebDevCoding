let year = 2032;
// if (year!=2002) console.log("It's not your birth year")
if(year==2002){
    console.log("It's your birth year")
}else{
    console.log("It's not your birth year")
}

let age = 18;
if(age<18){
    console.log("You can not vote")
}
else if(age==18){
    console.log("Complete 18");
}
else{
    console.log("You can vote")
}

let accessAllowed = (age > 18) ? true:false;
console.log(accessAllowed)

let age2 = (age<18) ? 'You can not vote': (age==18) ? 'complete  this year':(age>18) ? 'You can vote': 'great';
console.log(age2);
