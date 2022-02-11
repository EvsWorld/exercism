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
  // NOTE: make array of the length of the number of zeros
  const numZerosArray = [...Array(numberOfZeros).keys()];
  console.log("numZerosArray :>> ", numZerosArray);
  // NOTE: make string of zeros
  const zerosString = numZerosArray.reduce(
    (str: string, num: number): string => {
      return (str += "0");
    },
    ""
  );

  console.log("typeof zerosString :>> ", typeof zerosString);
  console.log("zerosString :>> ", zerosString);
  const ohmsVal = Number(`${expected}${zerosString}`);
  // console.log("ohmsVal :>> ", ohmsVal);
  if (ohmsVal >= 1000) {
    return `${ohmsVal / 1000} kiloohms`;
  }
  return `${ohmsVal} ohms`;
}
