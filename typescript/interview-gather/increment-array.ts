// * Goal: make a function that inputs an array like this, and outputs it like so

// Input [1,2,3]
// Out [1,2,4]

// Input [1,2,3,9]
// Out [1,2,4,0]

// Input [9,9,9]
// Out [1,0,0,0]

export function incrementArray(arr: number[]) {
  // join array and convert to a number
  let number = Number(arr.join(""));
  number += 1;
  // change number back to string
  let numString = number.toString();
  // console.log(numString);

  // make string an array (of strings)
  let numArr = [...numString];
  // console.log("numArr :>> ", numArr);

  // convert array of strings into array of numbers
  const final = numArr.map((n) => Number(n));

  // console.log("final :>> ", final);
  return final;
}

export function incrementArrayFor(arr: number[]) {
  for (let i = arr.length - 1; i >= 0; i--) {
    // console.log("iterating..", arr[i]);

    if (arr[i] === 9) {
      arr[i] = 0;
      console.log("\n*Got a 9! arr[i] = 0 :>> ", arr[i]);
    } else {
      arr[i] += 1;
      console.log("\n*Not a 9 arr[i] +=1 :>> ", arr[i]);
      return arr;
    }
  }
}

export function incrementArrayFor2(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    console.log("iterating..", arr[i]);

    if (arr[i] === 9) {
      arr[i] = 0;
      console.log("\n*Got a 9! arr[i] = 0 :>> ", arr[i]);
    } else {
      arr[i] += 1;
      console.log("\n*Not a 9 arr[i] +=1 :>> ", arr[i]);
      return arr;
    }
  }
}

// experiment
type NumOrString = number | string;

export function betweenFiveAndTwo(
  myV: NumOrString,
  myI: number,
  myA: NumOrString[]
): boolean {
  return (myA[myI] < 5 && myV > 2) || myV === "apple";
}

export function filterInPlace(
  a: NumOrString[],
  condition: (val: NumOrString, myi: number, ar: NumOrString[]) => boolean
): NumOrString[] {
  let i = 0,
    j = 0;

  // iterate over array until end
  while (i < a.length) {
    const val = a[i];
    if (condition(val, i, a)) a[j++] = val;
    i++;
  }

  a.length = j;
  return a;
}
console.log(
  filterInPlace([1, 2, 3, 4, "apple", 5, 6, 7, 8, 9], betweenFiveAndTwo)
);

// experiment
export function count<T>(source: T[], predicate: (x: T) => boolean): number {
  let matching = 0;

  for (let i = 0; i < source.length; i++) {
    if (predicate(source[i])) matching++;
  }

  return matching;
}

function calculatePercentage(answers: boolean[]): number {
  return Math.round((count(answers, (x) => x) / answers.length) * 100);
}

function calculatePercentageGreaterThanFive(answers: number[]): number {
  return Math.round((count(answers, (x) => x > 5) / answers.length) * 100);
}

console.log(
  calculatePercentage([true, true, false, false, true, true, true, true])
);
console.log(calculatePercentageGreaterThanFive([6, 1, 1, 1, 1, 1, 1, 1, 2, 2]));

// experiment with generic types
// NOTE: so the <T> at the beginning of the function is just simply replaced.
// Anywhere you see it its just replaced

export function addOrReplace<T>(
  source: T[],
  item: T,
  replacePredicate: (x: T) => boolean
): T[] {
  const result: T[] = [];
  let found = false;

  for (let i = 0; i < source.length; i++) {
    const currentItem = source[i];

    if (replacePredicate(currentItem)) {
      found = true;
      result.push(item);
    } else {
      result.push(currentItem);
    }
  }

  if (!found) {
    result.push(item);
  }

  return result;
}

console.log(addOrReplace([1, 2, 3, 4, 5, 6, 7], 100, (x) => x === 6));
console.log(
  addOrReplace(["red", "green", "blue"], "rainbo", (x) => x === "blue")
);

// computed properties used to make mapped type
type ColorKeys = "color" | "description" | "texture";
type ColorObject = {
  [key in ColorKeys]: string;
};
console.log(
  addOrReplace<ColorObject>(
    [
      { color: "blue", description: "like the sky", texture: "velvety" },
      { color: "red", description: "like a firetruck", texture: "hardish" },
    ],
    { color: "purple", description: "red", texture: "scratchy" },
    (x) => x.color === "red"
  )
);

// experiment with sets

function showSet<T>(s: T[]) {
  const set1 = new Set(s);
  set1.clear;
  console.log("set1 :>> ", set1);
  console.log("set1.size :>> ", set1.size);
  return [...set1];
  // return Array.from(set1); // may have to do this with typescript
}
console.log(showSet([1, 2, 2, 2, 2, 2, 3, 4, 5, 6, 7]));

// experiment with Omit and remove functions
export function omit<T extends Object, K extends keyof T>(
  source: T,
  key: K
): Omit<T, K> {
  const { [key]: omitted, ...rest } = source;

  return rest;
}

export function removePropertiesFromObject<T extends Object, K extends keyof T>(
  source: T,
  keys: K[]
): Partial<T> {
  const { ...clone } = source;

  for (let i = 0; i < keys.length; i++) {
    if (clone.hasOwnProperty(keys[i])) {
      delete clone[keys[i]];
    }
  }

  return clone;
}
