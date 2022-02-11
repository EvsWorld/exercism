export function decodedResistorValueOne(colors: string[]): string {
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

  const ohmsVal = Number(`${expected}${zerosString}`);
  // console.log("ohmsVal :>> ", ohmsVal);
  if (ohmsVal >= 1000) {
    return `${ohmsVal / 1000} kiloohms`;
  }
  return `${ohmsVal} ohms`;
}

export function decodedResistorValue(colors: string[]): string {
  const find = (color: string) => {
    const options = [
      "black",
      "brown",
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "violet",
      "grey",
      "white",
    ];
    return options.indexOf(color);
  };
  // console.log("colors[0] :>> ", colors[0]);
  // console.log("colors[1] :>> ", colors[1]);
  const ohmVal1 = find(colors[0]);
  const ohmVal2 = find(colors[1]);
  const ohmVal3 = find(colors[2]);
  // console.log("ohmVal1 :>> ", ohmVal1);
  // console.log("ohmVal2 :>> ", ohmVal2);
  // console.log("ohmVal3 :>> ", ohmVal3);
  let v = Number(`${ohmVal1}${ohmVal2}`) * 10 ** ohmVal3;
  // console.log("v :>> ", v);
  let units = "ohms";
  if (v >= 1000) {
    v /= 1000;
    units = "kiloohms";
  }
  return `${v} ${units}`;
}
