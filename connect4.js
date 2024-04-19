const player1 = "Mario";
const player2 = "Peach";
const currPlayer = player1;
 
const gameOver = false;
let board;
 
const rows = 6;
const columns = 7;
const currColums = [];
 
window.onload = function() {
    setGame();
};
 
function setGame() {
    board = [];
    currColums = [5, 5, 5, 5, 5, 5,];
   
    for (let r = 0; r < rows; r++) {
        let row = [];
       
        for (let c = 0; c < columns; c++) {
            row.push(' ');
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}
 
function setPiece() {
    if (gameOver) {
        return;
    }

    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
 
   
    r = currColums[c];
    }
    let coords = this.id.split("-");
    let r = parseInt(coords[0]); 
    let c = parseInt(coords[1]);
    r = currColums[c];
 
    if (r < 0) {
        return;
    }
    board[r][c] = currPlayer;
    let tile = document.getElementById(r.toString() + "-" + c.toString());
    if (currPlayer == player1) {
        tile.classList.add("mario");
        currPlayer = player2;
    } else {
        tile.classList.add("peach");
        currPlayer = player1;
    }
    r -= 1;
    currColums[c] = r;
    checkWinner();

    function setWinner(r, c) {
        let winner = document.getElementById("winner");
        if (board[r][c] === player1) {
            winner.innerText = "Mario Wins";
        } else {
            winner.innerText = "Peach Wins";
        }
        gameOver = true; 
}