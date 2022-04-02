// https://practice.geeksforgeeks.org/problems/first-element-to-occur-k-times5150/1/?page=1&curated[]=1&sortBy=submissions
// Given an array of N integers. Find the first element that occurs K number of times.
//

// correct solution
export function firstElementKTimes(arr: number[], n: number, k: number) {
  let answer: number = -1;
  const dict: { [key: number]: number } = {};
  for (const num of arr) {
    dict[num] = dict[num] ? (dict[num] += 1) : 1;
    // console.log(`dict[${num}]:>> , ${dict[num]}`);
    console.log("dict :>> ", dict);
    if (dict[num] >= k) {
      console.log("winner! num = ", num);
      answer = num;
      break;
    }
  }
  return answer;
}

// Solved a different problem. This returns the number that occurs k times and
// whose first occurance first appears in the array
export function firstElementKTimes2(arr: number[], n: number, k: number) {
  // make dictionary of each with its occurances
  type Tacc = { [key: number]: number };

  const dict = arr.reduce((acc: Tacc, c) => {
    console.log("acc :>> ", acc);
    console.log("c :>> ", c);
    acc[c] = acc[c] ? (acc[c] += 1) : 1;
    return acc;
  }, {});
  console.log("dict :>> ", dict);
  const first = arr.find((n) => {
    const found = dict[n] >= k;
    console.log("found :>> ", found);
    return found;
  });

  console.log("first :>> ", first);

  return first;
}
