function removeSmallest(arr: number[]) {
  const min = Math.min(...arr);
  return arr.filter((e) => e !== min);
}

export class DnDCharacter {
  constitution: number;
  strength: number;
  dexterity: number;
  wisdom: number;
  intelligence: number;
  charisma: number;
  hitpoints: number;

  constructor() {
    this.constitution = DnDCharacter.generateAbilityScore();
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {
    let rolls = [...Array(4)].map((d) => this.generateRandomDiceRollScore());
    console.log("rolls :>> ", rolls);
    rolls = removeSmallest(rolls);
    console.log("rolls :>> ", rolls);
    const sum = rolls.reduce((acc, current) => acc + current);
    console.log("sum :>> ", sum);
    return sum;
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }

  private static generateRandomDiceRollScore(): number {
    return Math.round(Math.random() * 5 + 1);
  }
}

console.log(DnDCharacter.getModifierFor(3));
console.log(DnDCharacter.generateAbilityScore());
console.log(DnDCharacter.generateRandomDiceRollScore());
const mydnd = new DnDCharacter();
console.log("mydnd.strength :>> ", mydnd.strength);
