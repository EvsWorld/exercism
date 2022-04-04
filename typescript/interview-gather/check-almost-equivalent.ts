// Two strings word1 and word2 are considered almost equivalent if the
// differences between the frequencies of each letter from 'a' to 'z' between
// word1 and word2 is at most 3.

// Given two strings word1 and word2, each of length n, return true if word1 and
// word2 are almost equivalent, or false otherwise.

// The frequency of a letter x is the number of times it occurs in the string.

// HINT: use Map
//
// a: 1       a: 4    (dif = 3)
// b: 1       b: 1    (dif = 0)
// c: 1   		c: 2    (dif = 0)
// d: 1       d: 0    (dif = 1)
// e: 1       e: 0    (dif = 1)
// f: 1       f: 0    (dif = 1)

export function checkAlmostEquivalent(word1: string, word2: string): boolean {
  // make Map  word with keys for each letter and add frequency to it
  // loop over second word and make map, but check against the first map for if the number for that ltr is greater, return false early
  // if get to the end and hasnt returned false early,
  // maybe have to loop  over
  let eq: boolean = false;
  const wMap1 = new Map<string, number>();
  const wMap2 = new Map<string, number>();

  for (let i = 0; i < word1.length; i++) {
    let ltr: string = word1[i];
    // console.log("ltr :>> ", ltr);
    // if ltr exists on map, increment it
    if (wMap1.has(ltr)) {
      // console.log("wMap1.has(ltr) :>> ", wMap1.has(ltr));
      const num = wMap1.get(ltr);
      // ? how to fix ts error that object is possibly undefined
      wMap1.set(ltr, num! + 1);
    } else {
      // if doesnt exist, create it
      wMap1.set(ltr, 1);
    }
  }

  console.log("wMap1 :>> ", wMap1);
  // loop over second word checking for this ltr and incrementing or decrementing wMap
  for (let j = 0; j < word2.length; j++) {
    const ltr = word2[j];
    // console.log("ltr :>> ", ltr);
    // if ltr exists on map, increment it
    if (wMap1.has(ltr)) {
      // console.log("wMap2.has(ltr2) :>> ", wMap2.has(ltr));
      const num = wMap1!.get(ltr);
      // ? how to fix ts error that object is possibly undefined
      wMap1.set(ltr, num! - 1);
    } else {
      // if doesnt exist, create it
      wMap1.set(ltr, 1);
    }
  }

  console.log("wMap1 :>> ", wMap1);
  // check if wMap1 has any value abs val greater than 3
  for (const entry of wMap1.entries()) {
    console.log("entry :>> ", entry);
    console.log("Math.abs(entry[1]) :>> ", Math.abs(entry[1]));
    const isGreater = Math.abs(entry[1]) > 3;

    if (isGreater) {
      console.log("greater :>> ", isGreater);
      return false;
    }
  }

  return true;
  // for (const entry of wMap1.entries()) {
  //   // console.log("entry = ", entry);
  //   console.log("entry[1] :>> ", entry[1]);
  //   const other = wMap2.get(entry[0]);
  //   console.log("other :>> ", other);
  //   const otherVal = other ? other : 0;

  //   const diff = Math.abs(entry[1] - otherVal);
  //   console.log("diff :>> ", diff);
  //   const diffGreater = diff > 3;
  //   // if (wMap2.has(entry[0])) {
  //   console.log("diffGreater :>> ", diffGreater);
  //   if (diffGreater) {
  //     console.log("diffGreater :>> ", diffGreater);
  //     return false;
  //   }
  // }
  // }
}
