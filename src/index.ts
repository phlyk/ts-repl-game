import readline from "readline";
import { Game } from "./game";

// Initialize the game
const game = new Game();

// Setup the readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Start the game loop
function startGame(isFinished = false) {
    if (isFinished) {
        console.log("Game Over");
        rl.close();
        return;
    }

    game.showActions();

    rl.question("Enter your choice: ", (input: string) => {
        isFinished = game.handleAction(input);
        startGame();  // Loop back to show actions again
    });
}

console.log("Welcome to the Battle Game!");
startGame();