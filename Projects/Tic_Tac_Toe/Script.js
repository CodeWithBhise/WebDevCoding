let playerText = document.getElementById('playText');
let restartBtn = document.getElementById('restartBtn');
let boxes = Array.from(document.getElementsByClassName('Box'));

// console.log(boxes)
let winnerindicator = getComputedStyle(document.body).getPropertyValue("--winning-block")
const O_text = "O";
const X_text = "X";
let CurrentPlayer = X_text;

let spaces = Array(9).fill(null)
const startGame =()=>{
    boxes.forEach(box=> box.addEventListener("click",boxClicked))
}

function boxClicked(e){
    const id = e.target.id;

    if(!spaces[id]){
        spaces[id]=CurrentPlayer;
        e.target.innerText = CurrentPlayer;
        if(playerhaswon()!==false){
            playerText = `${CurrentPlayer} has won!`;
            let winningblocks = playerhaswon()

            winningblocks.map(box=> boxes[box].style.backgroundColor=winnerindicator)
            return
        }
        CurrentPlayer = CurrentPlayer == X_text? O_text:X_text
        console.log(CurrentPlayer)
    }
}
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function playerhaswon(){
    for (const condition of winningCombos) {
        let [a,b,c] = condition;
        if(spaces[a] && (spaces[a]==spaces[b] && spaces[a]==spaces[c])){
            return [a,b,c];
        }
    }
    return false
}
restartBtn.addEventListener('click',restart)

function restart(){
    spaces.fill(null)
    boxes.forEach(box =>{
        box.innerText = "";
    })
    playerText = 'Tic tac toe'
    CurrentPlayer = X_text;
}
startGame()