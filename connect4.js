const players = {
    player1: "Mario",
    player2: "Peach"
};

let currPlayer = players.player1;

let gameOver = false;
let board;
const rows = 5;
const columns = 6;
let currColumns = Array(columns).fill(rows - 1);

window.onload = function() {
    setGame();
};

function setGame() {
    board = Array(rows).fill(null).map(() => Array(columns).fill(' '));
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile);
        }
    }
}

function setPiece() {
    if (gameOver) return;

    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (currColumns[c] < 0) return;

    r = currColumns[c]--;

    board[r][c] = currPlayer;

    let tileId = r.toString() + "-" + c.toString();
    let tile = document.getElementById(tileId);

    if (!tile) {
        console.error("Tile element not found!");
        return;
    }

    tile.classList.add(currPlayer === players.player1 ? "mario" : "peach");

    if (checkForWin(r, c)) setWinner(r, c);
    else togglePlayer();
}

function togglePlayer() {
    currPlayer = (currPlayer === players.player1) ? players.player2 : players.player1;
}

function checkForWin(r, c) {
    const directions = [[1, 0], [0, 1], [1, 1], [-1, 1]]; // down, right, diagonal right-down, diagonal left-down

    for (let [dx, dy] of directions) {
        let count = 1; // count the current piece
        let row = r + dx;
        let col = c + dy;

        while (row >= 0 && row < rows && col >= 0 && col < columns && board[row][col] === currPlayer) {
            count++;
            row += dx;
            col += dy;
        }

        row = r - dx;
        col = c - dy;

        while (row >= 0 && row < rows && col >= 0 && col < columns && board[row][col] === currPlayer) {
            count++;
            row -= dx;
            col -= dy;
        }

        if (count >= 4) return true;
    }

    return false;
}

function setWinner(r, c) {
    let winner = document.getElementById("winner");
    winner.innerText = `${currPlayer} Wins`;
    gameOver = true;
}
