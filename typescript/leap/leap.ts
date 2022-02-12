export function isLeap(year: number) {
  const divisibleBy400 = year % 400 === 0;
  const divisibleBy4 = year % 4 === 0;
  const divisibleBy100 = year % 100 === 0;
  if (divisibleBy4) {
    console.log("divisible by 4");
    if (divisibleBy100) {
      console.log("divisible by 4 and 100, so not leap year");
      // unless... if its divisible by 400, then is leap year
      if (divisibleBy400) {
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
  return true;
}
