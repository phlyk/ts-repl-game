import type { Player } from "./player";

export class Game {
    player: Player;
    enemy: Player;

    constructor(player: Player, enemy: Player){
        this.player = player;
        this.enemy = enemy;
    }

    public showActions(): void{
        console.log("\nChoose an action:");
        console.log("1: Attack");
        console.log("2: Defend");
        console.log("3: Heal");
        console.log("4: Quit");
    }

    public handleUserAction(input: string): boolean {
        console.log(`Action chosen: ${input}`);
        switch (input) {
            case "1": // Attack
                this.player.attack(this.enemy)
                break;

            case "2": // Defend
                this.player.defend(this.enemy)
                break;

            case "3": // Heal
                this.player.heal()
                break;

            case "4": // Quit
                console.log(`${this.player.name} quits the battle.`);
                return false;

            default:
                console.log("Invalid action. Try again.");
        }
        return true;
    }

    enemyTurn() {
        // Random choice: 1 (Attack), 2 (Defend), 3 (Heal)
        const action = Math.floor(Math.random() * 3) + 1;
    
        switch (action) {
            case 1: // Attack
                this.enemy.attack(this.player);
                break;
    
            case 2: // Defend
                this.enemy.defend(this.player);
                break;
    
            case 3: // Heal
                this.enemy.heal();
                break;
        }
    }
}

