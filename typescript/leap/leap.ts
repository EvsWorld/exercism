export function isLeap(year: number) {
  if (year % 4 === 0) {
    console.log("divisible by 4");
    if (year % 100 !== 0) {
      console.log("divisible by 4 but not 100");
      // unless... if its divisible by 400, then is leap year
      if (year % 400 === 0) {
        console.log(" divisible by 4 but not 100 but is divisible by 400 ");
        return true;
      }
      console.log(" divisible by 4 but not 100 and not divisible by 400 ");
      return false;
    }
    console.log("divisible by 4 and 100");
    return true;
  }
  console.log("not divisible by 4");
  return false;
}
