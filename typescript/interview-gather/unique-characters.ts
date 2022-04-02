// checks if string has unique values
export function isUnique(str: string) {
  var obj: { [key: string]: boolean } = {};
  for (var z = 0; z < str.length; ++z) {
    var ch = str[z];
    if (obj[ch]) return false;
    obj[ch] = true;
  }
  // console.log("obj :>> ", obj);
  return true;
}

export function hasIdenticalSetOfUniqueCharactersLong(
  a: string,
  b: string
): boolean {
  // Make array of unique vals
  const uniqueA = [...new Set(a)];
  const uniqueB = [...new Set(b)];

  const aString = uniqueA.sort().join(",").toLowerCase();
  const bString = uniqueB.sort().join(",").toLowerCase();

  return aString === bString;
}

export function hasIdenticalSetOfUniqueCharactersOnePass(
  a: string,
  b: string
): boolean {
  const UniqueSetA = new Set(a);
  const UniqueSetB = new Set(b);
  // console.log("UniqueSetA :>> ", UniqueSetA);
  // console.log("UniqueSetB :>> ", UniqueSetB);

  // short circit if any of UniqueSetA are not found in UniqueSetB
  for (let value of UniqueSetA.values()) {
    if (!UniqueSetB.has(value)) return false;
  }

  // short circit if any of UniqueSetB are not found in UniqueSetA
  for (let value of UniqueSetB.values()) {
    if (!UniqueSetA.has(value)) return false;
  }
  // if hasnt exited up to here then they were all found
  return true;
}
