function hasIdenticalSetOfUniqueCharacters(a: string, b: string): boolean {
  const uniqueA = [...new Set(a)];

  const uniqueB = [...new Set(b)];

  const aString = uniqueA.sort().join(",").toLowerCase();
  const bString = uniqueB.sort().join(",").toLowerCase();
  return aString === bString;
  console.log("uniqueA: ", uniqueA);
}

function hasIdenticalSetOfUniqueCharacters2(a: string, b: string): boolean {
  const A = new Set(a);
  const B = new Set(b);
  for (let value of A.values()) {
    if (!B.has(value)) return false;
  }

  for (let value of B.values()) {
    if (!A.has(value)) return false;
  }
  return true;
}
console.log(hasIdenticalSetOfUniqueCharacters("aaaabcccccdefg", "abcdefggggg"));
console.log(hasIdenticalSetOfUniqueCharacters("cccccdefg", "abcdefggggg"));

console.log(
  hasIdenticalSetOfUniqueCharacters2("aaaabcccccdefg", "abcdefggggg")
);
console.log(hasIdenticalSetOfUniqueCharacters2("cccccdefg", "abcdefggggg"));
