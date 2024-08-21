import { Chess } from "./node_modules/chess.js/dist/esm/chess.js"
import { computerVsComputer } from "./js/ComputerVsComputer.js";
import { playerVsComputer } from "./js/PlayerVsComputer.js";

const modeSelectionButtons = document.getElementById('game-options').querySelectorAll('input');

function reloadGame() {
    newGame.reset()
    mainBoard.position(newGame.fen())
}

function loadEventListeners() {
    modeSelectionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.value == "Computer Vs Computer") {
                let newGame = new computerVsComputer(500);
            } else {
                playerVsComputer(750);
            };
        })
    })
}

loadEventListeners()