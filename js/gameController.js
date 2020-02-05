const player1Name = document.querySelector("#player1");
const player2Name = document.querySelector('#player2');
const gameText = document.querySelector("#gameText")
const formArea = document.querySelector('#namesAndButtons')
let resetBtn
let playerXOne;
let playerYTwo;
const boxButton0 = document.querySelector("#box0");
const boxButton1 = document.querySelector("#box1");
const boxButton2 = document.querySelector("#box2");
const boxButton3 = document.querySelector("#box3");
const boxButton4 = document.querySelector("#box4");
const boxButton5 = document.querySelector("#box5");
const boxButton6 = document.querySelector("#box6");
const boxButton7 = document.querySelector("#box7");
const boxButton8 = document.querySelector("#box8")




const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", function() {
    playerXOne = createPlayer(`${player1Name.value}`, 'X');
    playerYTwo = createPlayer(`${player2Name.value}`, "O");
    enableButtons();
    startGame();
    changeTextOfForm();
});

function enableButtons() {
    boxButton0.disabled = false;
    boxButton1.disabled = false;
    boxButton2.disabled = false;
    boxButton3.disabled = false;
    boxButton4.disabled = false;
    boxButton5.disabled = false;
    boxButton6.disabled = false;
    boxButton7.disabled = false;
    boxButton8.disabled = false;

}


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
    gameText.textContent = `${playerXOne.userName} is X and ${playerYTwo.userName} is O`
};

function changeTextOfForm() {
    formArea.innerHTML = `<input class="reset" id="reset" type="reset" value="Reset">`
    resetBtn = document.querySelector("#reset");
    resetBtn.addEventListener('click', function() {
        resetGame();
    });

}

function checkForWinner() {
    const winner = getWinner(gameBoard.grid)
    if (winner) {
        gameText.innerHTML =
            `<h1>We have a winner, the ${winner}'s take it!</h1>`
    }
}

function getWinner(arr) {
    if (isWinningCombination(arr, "X")) {
        return "X"
    } else if (isWinningCombination(arr, "O")) {
        return "O"
    } else { return null; }
};

function isWinningCombination(arr, player) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    let isWinningCombo = false;
    winningCombinations.forEach(combo => {
        if (combo.every(box => {
                return arr[box] === player;
            })) {
            isWinningCombo = true;
        }

    })
    return isWinningCombo;
}