// on every year that is evenly divisible by 4
//   except every year that is evenly divisible by 100
//     unless the year is also evenly divisible by 400

export function isLeapOne(year: number) {
  const divisibleBy = (number: number): boolean => year % number === 0;
  if (divisibleBy(4)) {
    console.log("divisible by 4");
    if (divisibleBy(100)) {
      console.log("divisible by 4 and 100, so not leap year");
      // unless... if its divisible by 400, then is leap year
      if (divisibleBy(400)) {
        console.log(
          "divisible by 4 and 100(not lp yr) but is divisible by 400, (so is lp yr)"
        );
        return true;
      }
      console.log(
        " divisible by 4 and 100 (not lp yr) but not divisible by 400 "
      );
      return false;
    }
    console.log("divisible by 4 but not 100");
    return true;
  }
  console.log("not divisible by 4");
  return false;
}

export function isLeap(year: number) {
  const divisibleBy = (number: number): boolean => year % number === 0;
  return divisibleBy(4) && !divisibleBy(100);
}
