function Cell() {
    return " ";
}

const playerOne = {name: "Player One", token: "X"};
const playerTwo = {name: "Player Two", token: "O"};

let board;

function Gameboard() {
    const rows = 3;
    const columns = 3;
    board = [];

    for (i  = 0; i < rows; i++) {
        board[i] = [];
        for (j = 0; j < columns; j++) {
            board[i].push(Cell());
            console.log(board);
        }
    }
    return board;
}


function dropToken(rowIndex, colIndex, player) {
    if (board[rowIndex][colIndex] === " ") {
        board[rowIndex][colIndex] = player.token;
        console.log(board);
        return true; 
    } else {
        console.log("Cell is already occupied");
        return false; 
}
}

function CheckWinner() {
    

}

function CheckActivePlayer() {

}

function GamePlay() {
    Gameboard();
    dropToken(1, 1, playerOne);
    dropToken(1, 1, playerTwo);

}

GamePlay();

