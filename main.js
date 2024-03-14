const playerOne = {name: "Player One", token: "X"};
const playerTwo = {name: "Player Two", token: "O"};

let board;

function Gameboard() {
    const rows = 3;
    const columns = 3;
    board = [];
    
    function Cell() {return " ";}
        
    
    const container = document.querySelector("#container");

    for (i  = 0; i < rows; i++) {
        board[i] = [];
        for (j = 0; j < columns; j++) {
            board[i].push(Cell());
            console.log(board);
            const cell = document.createElement("div");
            cell.classList.add("cell");
            container.appendChild(cell);
            cell.addEventListener("click", () => {
                dropToken(i, j, player)
                cell.innerText = player.token;
            })
        }
    }
}


function dropToken(rowIndex, colIndex, player) {
    const cell = document.querySelector(".cell")[colIndex + rowIndex * 3];
    
    if (board[rowIndex][colIndex] === " ") {
        board[rowIndex][colIndex] = player.token;
        console.log(board);
    } else {
        console.log("Cell is already occupied"); 
    }
    
    
}

function CheckWinner() {
    for (i = 0; i < 3; i++) {
        if (board[i][0] !== " " && board[i][0] === board[i][1] && board[i][1] && board[i][2]) {
            console.log("ania")
            return board[i][0];
        } else {
            console.log("nie ma wygranej w wierszu");
        }
    }
    
    for (j = 0; j < 3; j++) {
        if (board[0][j] !== " " && board[0][j] === board[1][j] && board[1][j] && board[2][j]) {
            console.log("kamil")
            return board[0][j];
        } else {
            console.log("nie ma wygranej w kolumnie");
        }
    }

    if (board[0][0] !== " " && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        console.log("fello")
        return board[0][0];
    } else {
        console.log("nie ma wygranej po przekatnej w prawo");
    }

    if (board[0][2] !== " " && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        console.log("castello")
        return board[0][2];
    } else {
        console.log("nie ma wygranej po przekatnej w lewo");
    }
}

function CheckActivePlayer() {

}

function GamePlay() {
    Gameboard();

    dropToken(0, 0, playerOne);
    dropToken(0, 1, playerOne);
    dropToken(0, 2, playerOne);
    dropToken(2, 1, playerTwo);
    CheckWinner();

}

GamePlay();
