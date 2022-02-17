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
interface lessThanFiveParams {
  myV: number;
  myI: number;
  myA: number[];
}

export function betweenFiveAndTwo(
  myV: number,
  myI: number,
  myA: number[]
): boolean {
  return myA[myI] < 5 && myV > 2;
}

export function filterInPlace(
  a: number[],
  condition: (val: number, myi: number, ar: number[]) => boolean
): number[] {
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
console.log(filterInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9], betweenFiveAndTwo));

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
