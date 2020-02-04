const player1Name = document.querySelector("#player1");
const player2Name = document.querySelector('#player2');
const gameText = document.querySelector("#gameText")
const formArea = document.querySelector('#namesAndButtons')
let resetBtn
let playerXOne;
let playerYTwo;

const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", function() {
    playerXOne = createPlayer(`${player1Name.value}`, 'X');
    playerYTwo = createPlayer(`${player2Name.value}`, "O");
    startGame();
    changeTextOfForm();
});


function resetGame() {
    gameBoard.grid = ['', '', '',
        '', '', '',
        '', '', ''
    ];
    player1Name.value = "";
    player2Name.value = "";
    gameBoard.renderGrid();
    formArea.innerHTML = `<form id="namesAndButtons" onsubmit="return false;">
    Player 1 Name:
    <br>
    <input id="player1" type="text" name="player1" value="" required>
    <br> Player 2 Name:
    <br>
    <input id="player2" type="text" name="player2" value="" required>
    <br>
    <input id="submit" type="submit" value="Submit">
    <input class="reset" id="reset" type="reset" value="Reset"></form`
    gameText.textContent = ""
}

function startGame() {
    gameText.textContent = `Time to play! ${playerXOne.userName} is X's and it's your turn!`
};

function changeTextOfForm() {
    formArea.innerHTML = `<input class="reset" id="reset" type="reset" value="Reset">`
    resetBtn = document.querySelector("#reset");
    resetBtn.addEventListener('click', function() {
        resetGame();
    });

}

function checkForWinner() {
    switch (gameBoard.grid) {
        case gameBoard[0] === gameBoard[1] && gameBoard[2] === gameBoard[3]:
            formArea.innerHTML = `<h1>We have a winner</h1>`;
            break;

    }
}