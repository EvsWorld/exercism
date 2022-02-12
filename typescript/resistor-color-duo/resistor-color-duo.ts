export function decodedValue(colors: string[]) {
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
  // console.log(`firstVal: ${dict[firstColor]}`);
  // console.log(`secondVal: ${dict[secondColor]}`);
  const expected = Number(`${dict[firstColor]}${dict[secondColor]}`);
  return expected;
}
