function removeSmallest(arr: number[]) {
  const min = Math.min(...arr);
  return arr.filter((e) => e !== min);
}
export class DnDCharacter {
  constitution: number = 0;
  strength: number = 0;
  dexterity: number = 0;
  wisdom: number = 0;
  intelligence: number = 0;
  charisma: number = 0;
  hitpoints: number = 10;

  public static generateAbilityScore(): number {
    const randomArrayLength = () => Math.round(Math.random() * 5 + 1);
    let tries = [0, 0, 0, 0].map((d) => {
      return randomArrayLength();
    });
    // console.log("tries :>> ", tries);
    tries = removeSmallest(tries);
    // console.log("tries :>> ", tries);
    const sum = tries.reduce((acc, current) => acc + current);
    // console.log("sum :>> ", sum);
    return sum;
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
const character = new DnDCharacter();
// console.log(DnDCharacter.getModifierFor(25));
console.log(DnDCharacter.getModifierFor(3));
console.log(DnDCharacter.generateAbilityScore());
