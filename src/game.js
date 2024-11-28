"use strict";
//Base Game
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
    constructor(name, health, attack, defense) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
    }
    //Deal Damage
    //dealDamage(target: Game) {
    //    console.log(`${this.name} attacks ${target.name}!`);
    //    target.takeDamage(this.attack);
    //}
    //Take Damage
    //takeDamage(damage: number) {
    //    const actualDamage = Math.max(damage - this.defense, 0);
    //    this.health -= actualDamage;
    //    console.log(`${this.name} took ${actualDamage} damage! Remaining health: ${this.health}`);
    //}
    showActions(name, health, attack, defense) {
        console.log("\nChoose an action:");
        console.log("1: Attack");
        console.log("2: Defend");
        console.log("3: Heal");
        console.log("4: Quit");
    }
    handleAction(input, opponent) {
        console.log(`Action chosen: ${input}`);
        switch (input) {
            case "1": // Attack
                attack(this, opponent);
                break;
            case "2": // Defend
                this.defense += 2; // Temporarily boost defense
                console.log(`${this.name} is defending and increases defense to ${this.defense}!`);
                break;
            case "3": // Heal
                const healAmount = 10;
                this.health += healAmount;
                console.log(`${this.name} heals for ${healAmount} points!`);
                break;
            case "4": // Quit
                console.log(`${this.name} quits the battle.`);
                return false;
            default:
                console.log("Invalid action. Try again.");
        }
        return true;
    }
}
exports.Game = Game;
// Main game loop
const player = new Game("DOG", 50, 10, 5);
const enemy = new Game("CAT", 50, 10, 5);
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
function gameLoop() {
    if (player.health <= 0) {
        console.log("You have been defeated by a Cat!");
        readline.close();
        return;
    }
    if (enemy.health <= 0) {
        console.log("Congratulations! You defeated the Cat!");
        readline.close();
        return;
    }
    player.showActions();
    readline.question("Choose your action: ", (action) => {
        if (!player.handleAction(action, enemy)) {
            readline.close();
            return;
        }
        // Enemy turn logic
        if (enemy.health > 0) {
            attack();
        }
        // Show current stats
        console.log(`\nPlayer Health: ${player.health}, Enemy Health: ${enemy.health}`);
        gameLoop();
    });
}
console.log("Battle begins!");
gameLoop();
function attack(attacker, defender) {
    const attackerDamage = Math.max(attacker.attack - defender.defense, 1);
    defender.health -= attackerDamage;
    console.log(`The ${attacker.name} attacks ${defender.name} for ${attackerDamage} damage!`);
}
