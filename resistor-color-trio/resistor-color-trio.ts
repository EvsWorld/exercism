export function decodedResistorValue(colors: string[]) {
  // throw new Error('Remove this statement and implement this function')

  const dict: { [key: string]: number } = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };
  const firstColor: string = colors[0];
  const secondColor: string = colors[1];
  const thirdColor: string = colors[2];
  // console.log(`firstVal: ${dict[firstColor]}`);
  // console.log(`secondVal: ${dict[secondColor]}`);
  const numberOfZeros = dict[thirdColor];
  // console.log("numberOfZeros :>> ", numberOfZeros);
  const expected = Number(`${dict[firstColor]}${dict[secondColor]}`);
  let zerosString = "";
  for (let i = 0; i < numberOfZeros; i++) {
    zerosString += 0;
  }
  // console.log("zerosString :>> ", zerosString);
  const ohmsVal = Number(`${expected}${zerosString}`);
  console.log("ohmsVal :>> ", ohmsVal);
  if (ohmsVal >= 1000) {
    return `${ohmsVal / 1000} kiloohms`;
  }
  return `${ohmsVal} ohms`;
}
