let btn = document.querySelector('button');
let player1 ="X";
[
    [0,1,2]
    [0,4,8]
    [0,3,6]
    [1,4,7]
    [2,4,6]
    [2,5,8]
    [3,4,5]
    [6,7,8]
]


btn.addEventListener('click', function(){
 alert('You done did it')
});
let cells = document.querySelectorAll('.cell');

cells.forEach(function(cell){
    cell.addEventListener("click", cellClicked);
});

function cellClicked(e) { 
    e.target.innerHTML=player1;
    if (player1=="X"){
        player1="O";
    } 
    else{player1="X";

    }
}
