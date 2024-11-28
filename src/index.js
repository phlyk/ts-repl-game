"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const game_1 = require("./game");
// Initialize the game
const game = new game_1.Game();
// Setup the readline interface
const rl = readline_1.default.createInterface({
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
    rl.question("Enter your choice: ", (input) => {
        isFinished = game.handleAction(input);
        startGame(); // Loop back to show actions again
    });
}
console.log("Welcome to the Battle Game!");
startGame();
