"use strict";
//Base Game
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Game = /** @class */ (function () {
    function Game(name, health, attack, defense) {
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
    Game.prototype.showActions = function (name, health, attack, defense) {
        console.log("\nChoose an action:");
        console.log("1: Attack");
        console.log("2: Defend");
        console.log("3: Heal");
        console.log("4: Quit");
    };
    Game.prototype.handleAction = function (input, opponent) {
        console.log("Action chosen: ".concat(input));
        switch (input) {
            case "1": // Attack
                attack(this, opponent);
                break;
            case "2": // Defend
                this.defense += 2; // Temporarily boost defense
                console.log("".concat(this.name, " is defending and increases defense to ").concat(this.defense, "!"));
                break;
            case "3": // Heal
                var healAmount = 10;
                this.health += healAmount;
                console.log("".concat(this.name, " heals for ").concat(healAmount, " points!"));
                break;
            case "4": // Quit
                console.log("".concat(this.name, " quits the battle."));
                return false;
            default:
                console.log("Invalid action. Try again.");
        }
        return true;
    };
    return Game;
}());
exports.Game = Game;
// Main game loop
var player = new Game("DOG", 50, 10, 5);
var enemy = new Game("CAT", 50, 10, 5);
var readline = require("readline").createInterface({
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
    player.showActions(player.name, player.health, player.attack, player.defense);
    readline.question("Choose your action: ", function (action) {
        if (!player.handleAction(action, enemy)) {
            readline.close();
            return;
        }
        // Enemy turn logic
        if (enemy.health > 0) {
            console.log("\nThe ".concat(enemy.name, "'s turn..."));
            enemyTurn(enemy, player);
        }
        // Show current stats
        console.log("\nPlayer Health: ".concat(player.health, ", Enemy Health: ").concat(enemy.health));
        gameLoop();
    });
}
console.log("Battle begins!");
gameLoop();
function attack(attacker, defender) {
    var attackerDamage = Math.max(attacker.attack - defender.defense, 1);
    defender.health -= attackerDamage;
    console.log("The ".concat(attacker.name, " attacks ").concat(defender.name, " for ").concat(attackerDamage, " damage!"));
}
function defense(defender, attacker) {
    this.defense += 2;
    console.log("".concat(defender.name, " is defending and increases his defense to ").concat(this.defense, "!"));
}
function heal(player) {
    var healAmount = 10;
    player.health += healAmount;
    console.log("".concat(player.name, " heals for ").concat(healAmount, " points!"));
}
function enemyTurn(enemy, player) {
    var action = Math.floor(Math.random() * 3) + 1; // Random choice: 1 (Attack), 2 (Defend), 3 (Heal)
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
