export class Player {
	dodgeChance = 0.2;
	defenseChance = 0.5;

	name: string;
	healthPoints: number;
	attackPoints: number;
	defensePoints: number;

	constructor(name: string, health: number, attack: number, defense: number) {
		this.name = name;
		this.healthPoints = health;
		this.attackPoints = attack;
		this.defensePoints = defense;
	}

	attack(target: Player) {
		const targetDodged = Math.random() < target.dodgeChance;
		if (targetDodged) {
			console.log(`${target.name} dodges the attack and takes no damage!`);
			return;
		}

		const attackDamage = Math.max(this.attackPoints - target.defensePoints, 1);

		console.log(
			`The ${this.name} attacks ${target.name} for ${attackDamage} damage!`,
		);
		target.healthPoints -= attackDamage;
	}

	defend(attacker: Player) {
		const defenseSuccess = Math.random() < this.defenseChance;
        let damageToTake = 0;
		if (defenseSuccess) {
			// defense successful, reduce damage by defense points
			damageToTake = attacker.attackPoints - this.defensePoints;
			console.log(`${this.name} successfully defends and takes no damage!`);
		} else {
            // block/defense failed, take 100% damage
			damageToTake = attacker.attackPoints;
			console.log(`${this.name} fails to defend and takes ${damageToTake} damage!`);
		}

        this.healthPoints -= damageToTake;
	}

	heal() {
		const healAmount = 5;
		this.healthPoints += healAmount;
		console.log(`${this.name} heals for ${healAmount} points!`);
	}
}
