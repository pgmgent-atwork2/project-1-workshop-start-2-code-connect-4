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
    columns = [5,5,5,5,5,5,5]
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
};