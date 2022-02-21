export function isPangramA(s: string) {
  // throw new Error('Remove this statement and implement this function')
  if (s === "") return false;
  // iterate over and check if exists in alphabet table?  iterate over and mark
  // if its unique so far, then if so, increment counter, then at the end if the
  // counter == 27 then its a panagram

  const stringArray = s.split("").map((char) => char.toLowerCase());
  const unique = new Set([...stringArray]);
  let uniqueArray = Array.from(unique);
  uniqueArray = uniqueArray.filter((char, index, arr) => {
    // console.log("!Number.isInteger(char)  :>> ", !Number.isInteger(char));
    // return !Number.isInteger(+char) && !["_", " ", ".", '"'].includes(char);
    return /[a-z]/.test(char); // the above works too, but is much messier
  });
  // console.log("\n\n string = : ", s);
  // console.log("uniqueArray: " + uniqueArray + "\n");
  // console.log("uniqueArray.length: " + uniqueArray.length + "\n");
  return uniqueArray.length === 26;
}

export function isPangram(s: string) {
  const mySet = new Set(s.toLowerCase().replace(/[^a-z]/g, ""));
  console.log("mySet :>> ", mySet);
  return mySet.size === 26;
}
