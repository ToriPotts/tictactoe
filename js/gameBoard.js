const containerDiv = document.querySelector("#container");
let xOrO = "";


const gameBoard = {
    grid: ["", "", "",
        "", "", "",
        "", "", ""
    ],
    renderGrid: function() {
        for (let i = 0; i < 9; i++) {
            const currentBox = document.querySelector(`#box${i}`);
            currentBox.textContent = this.grid[i];
        }
    },
    setClickListeners: function() {
        for (let i = 0; i < 9; i++) {
            const currentClickedBox = document.querySelector(`#box${i}`);



            currentClickedBox.addEventListener('click', () => {
                switch (xOrO) {
                    case "X":
                        xOrO = "O";
                        break;
                    case "O":
                        xOrO = "X";
                        break;
                    case "":
                        xOrO = "X";
                        break;
                }
                if (this.grid[i] === "X" || this.grid[i] === "O") { return } else { this.grid[i] = xOrO }

                this.renderGrid()
                checkForWinner();
            })
        }
    },
}

gameBoard.renderGrid();
gameBoard.setClickListeners();