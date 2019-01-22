var origBoard;
let btn = document.querySelector('button');
let player1 = "X";
let drawCounter = 0;

let a0 = document.getElementById('0')
let a1 = document.getElementById('1')
let a2 = document.getElementById('2')
let a3 = document.getElementById('3')
let a4 = document.getElementById('4')
let a5 = document.getElementById('5')
let a6 = document.getElementById('6')
let a7 = document.getElementById('7')
let a8 = document.getElementById('8')
const WinCombos = [
    [a0, a1, a2],
    [a0, a4, a8],
    [a0, a3, a6],
    [a1, a4, a7],
    [a2, a4, a6],
    [a2, a5, a8],
    [a3, a4, a5],
    [a6, a7, a8],

]

btn.addEventListener('click', function () {
    alert('Starting New Game');
});

let cells = document.querySelectorAll('.cell');
startGame();
function startGame() {
    drawCounter = 0
    origBoard = Array.from(Array(9).keys());
    for (var i = 0; i < cells.length; i++) {
        cells[i].textContent = ' ';
    }
}



cells.forEach(function (cell) {
    cell.addEventListener("click", cellClicked);
});

function cellClicked(e) {
    if (e.target.textContent == "X" || e.target.textContent == "O") {
        alert("filled")
        return;
    } else {
        e.target.textContent = player1;
    }
    draw();
    WinCheck();
    checkTurn();

};
function draw(){
    drawCounter++
    console.log(drawCounter)
 if (drawCounter == 9) {
     alert("Draw")
 } 
 }

 
function WinCheck() {
    for (var i = 0; i < WinCombos.length; i++) {
        let counter = 0
        let wins = WinCombos[i].length
        for (var j = 0; j < wins; j++) {
    
            winCell = WinCombos[i][j].textContent
            if (winCell == player1) {
                counter++
                if (counter == 3) {
                    alert(player1 + 'wins')
                    return;
                }
            }

        }

    }
}


function checkTurn() {
    if (player1 == "X") {
        player1 = "O";
    } else {
        player1 = "X";
    }
}