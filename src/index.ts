import readline from "readline";
import { attack, defense, Game, heal } from "./game";

// Initialize the game
const player = new Game ("DOG", 50, 10, 5);    
const enemy = new Game ("CAT", 50, 8, 6);

// Setup the readline interface
const lineReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Random choice: 1 (Attack), 2 (Defend), 3 (Heal)
function enemyTurn(enemy: Game, player: Game) {
    const action = Math.floor(Math.random() * 3) + 1; 

    switch (action) {
        case 1: // Attack
            attack(enemy, player);
            break;

        case 2: // Defend
            defense(enemy, player);
            break;

        case 3: // Heal
            heal(enemy);
            break;
    }
}

// Start the game loop
function gameLoop() {
    if (player.health <= 0) {
        console.log("You have been defeated by a Cat!");
        lineReader.close();
        return;
    }
    if (enemy.health <= 0) {
        console.log("Congratulations! You defeated the Cat!");
        lineReader.close();
        return;
    }

    player.showActions(player.name, player.health, player.attack, player.defense);
    lineReader.question("Choose your action: ", (action: string) => {
        if (!player.handleAction(action, enemy)) {
            lineReader.close();
            return;
        }

        // Enemy turn logic
        if (enemy.health > 0) {
            console.log(`\nThe ${enemy.name}'s turn...`);
            enemyTurn(enemy, player);
        }
        

        // Show current stats
        console.log(`\nPlayer Health: ${player.health}, Enemy Health: ${enemy.health}`);
        gameLoop();
    });
}

console.log("Battle begins!");
gameLoop();
