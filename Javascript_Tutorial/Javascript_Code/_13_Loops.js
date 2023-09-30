// Whille Loop
// let num = 0;
// while(num<5){
//     num++
//     console.log(num)
// }

// let i = 0;
// while(i < 3){
//     console.log(i)
//     i++;
// }
// let i = 5;
// while (i) console.log(i--)

// 

// do while 
let i = 0;
do {
    console.log(i);
    i++
}while(i<3);

// for loop
for(let i = 0; i<3; i++){
    console.log(i)
}

// break
let sum = 0;
while (true){
    let value = +console.log("Enter a number", '');
    if(!value) break;
    sum+=value;
}
console.log('Sum: '+sum)

for(let i = 0; i<10; i++){
    if (i%2==0)continue;
    console.log(i)
}