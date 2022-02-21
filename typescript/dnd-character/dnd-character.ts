function removeSmallest(arr: number[]) {
  const min = Math.min(...arr);
  return arr.filter((e) => e !== min);
}

interface IDnDCharacter {
  constitution: number;
  strength: number;
  dexterity: number;
  wisdom: number;
  intelligence: number;
  charisma: number;
  hitpoints: number;
}
export class DnDCharacter implements IDnDCharacter {
  constitution = DnDCharacter.generateAbilityScore();
  strength = DnDCharacter.generateAbilityScore();
  dexterity = DnDCharacter.generateAbilityScore();
  wisdom = DnDCharacter.generateAbilityScore();
  intelligence = DnDCharacter.generateAbilityScore();
  charisma = DnDCharacter.generateAbilityScore();
  hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);

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
