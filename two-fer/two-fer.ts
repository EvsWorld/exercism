/**
 * This stub is provided to make it straightforward to get started.
 */
export function twoFer(name: string = "you"): string {
  // let altName = name ? name : "you";
  const expected = `One for ${name}, one for me.`;
  console.log("expected :>> ", expected);
  return expected;
}
export function twoFer2(name?: string): string {
  let altName = name ? name : "you";
  const expected = `One for ${altName}, one for me.`;
  console.log("expected :>> ", expected);
  return expected;
}
