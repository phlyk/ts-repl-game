//Base Game

export class Game {
    name: string;
    health: number;
    attack: number;
    defense: number;

    constructor(name: string, health: number, attack: number, defense: number){
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
    }

    public showActions(name: string, health: number, attack: number, defense: number): void{
        console.log("\nChoose an action:");
        console.log("1: Attack");
        console.log("2: Defend");
        console.log("3: Heal");
        console.log("4: Quit");
    
    }

    public handleAction(input: string, opponent: Game): boolean {
        console.log(`Action chosen: ${input}`);
        switch (input) {
            case "1": // Attack
                attack(this, opponent)
                break;

            case "2": // Defend
                defense(this, opponent)
                break;

            case "3": // Heal
                const healAmount = 5;
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

// Main game loop



export function attack(attacker: Game, defender: Game) {
// 20% chance to dodge
    const dodgeChance = Math.random() < 0.2;
    if (dodgeChance) {
        console.log(`${defender.name} dodges the attack and takes no damage!`);
        return;
    }

    const attackerDamage = Math.max(attacker.attack - defender.defense, 1);
    defender.health -= attackerDamage;
    console.log(`The ${attacker.name} attacks ${defender.name} for ${attackerDamage} damage!`);

}

export function defense(defender: Game, attacker: Game) {
    // Random number < 0.5 means success
    const defenseSuccess = Math.random() < 0.5; 
    if (defenseSuccess) {
        console.log(`${defender.name} successfully defends and takes no damage!`);
    } else {
    // 100% damage    
        const damage = Math.max(attacker.attack - defender.defense, 1); 
        defender.health -= damage;
        console.log(`${defender.name} fails to defend and takes ${damage} damage!`);
    }
}

export function heal(player: Game) {
    const healAmount = 5;
    player.health += healAmount;
    console.log(`${player.name} heals for ${healAmount} points!`);
}



