// You are given a 0-indexed integer array nums and two integers key and k. A
// k-distant index is an index i of nums for which there exists at least one
// index j such that |i - j| <= k and nums[j] == key.

import { match } from "assert/strict";

// Return a list of all k-distant indices sorted in increasing order.

// HINT: For every occurrence of key in nums, find all indices within distance k from it.
// HINT: Use a hash table to remove duplicate indices.

// {
// 	   : 0,  (9-2=7 : index 0)
// 	   2: 1,  (9-7=2 : index 1)
// 	  -2: 2
// 	  -6: 3
// }

// best solution found
export function findKDistantIndices(nums: number[], key: number, k: number) {
  let obj: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    // for the instances of 'key'...
    if (nums[i] === key) {
      // find start (k distance behind i)
      // find the bigger value between first index (0) or i - k
      let start = Math.max(0, i - k);
      // find end (k distance in front of i)
      // find lesser value between end index or i + k
      let end = Math.min(nums.length - 1, i + k);

      // loop over from start to end and print ones
      // this is saving all the possible indexes,
      // and it does this loop for each 'key',
      // this eliminates saving duplicate indices
      for (let j = start; j <= end; j++) {
        obj[j] = 1;
        console.log("obj after :>> ", obj);
      }
    }
  }
  // NOTE: its way faster without this extra loop to change the keys to numbers
  return Object.keys(obj).map((n) => Number(n));
}

// findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1);

// this is inefficient. need to use hash table somehow
export function findKDistantIndicesSlowLoops(
  nums: number[],
  key: number,
  k: number
): number[] {
  function getAllIndexes(arr: number[], val: number) {
    var indexes = [],
      i;
    for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
    return indexes;
  }

  const res: number[] = [];
  const keyIndices = getAllIndexes(nums, key);
  for (let [index, j] of keyIndices.entries()) {
    console.log("\nj :>> ", j);
    for (let [i, num] of nums.entries()) {
      // console.log("num :>> ", num);
      if (Math.abs(i - j) <= k) {
        res.push(i);
      }
    }
  }
  const resUnique = [...new Set(res)];
  console.log("resUnique :>> ", resUnique);
  return resUnique;
}
// *** All below here don't work ******

// Doesnt work
export function findKDistantIndicesHash(
  nums: number[],
  key: number,
  k: number
) {
  const ans: number[] = [];
  const fre: { [key: number]: number } = {};
  // make bottom hashmap with length 1 greater
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      let left = Math.max(0, i - k);
      let right = Math.min(nums.length, i + k + 1);
      console.log("left :>> ", left);
      console.log("right :>> ", right);
      if (fre[left] === undefined) {
        fre[left] = 1;
      } else {
        fre[left] = fre[left] + 1;
      }
      if (fre[right] === undefined) {
        fre[right] === -1;
      } else {
        fre[right] = fre[right] - 1;
      }
    }
    console.log("fre :>> ", fre);
  }

  let cumm: number = 0;
  for (let i = 0; i < nums.length; i++) {
    cumm += fre[i];
    if (cumm > 0) ans.push(i);
  }
  console.log("ans :>> ", ans);
  return ans;
}

function getAllIndexes(arr: number[], val: number) {
  var indexes = [],
    i;
  for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
  return indexes;
}

// this does nothing
export function findKDistantIndices1(nums: number[], key: number, k: number) {
  // make dictionary where keys are the allowable difference ( (|i-j| <= k) && nums[j] === key )
  // and the value is the index where that is satisfied
  const dict: { [key: number]: number } = {};

  // get all indices for key
  const keyIndices = getAllIndexes(nums, key);
  console.log("keyIndices :>> ", keyIndices);
  const r: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const distance1 = Math.abs(keyIndices[0] + 1 - k);
    const distance2 = Math.abs(keyIndices[1] + 1 - k);
    console.log(`\n\ndistance1 for ${n} :>>  ${distance1}`);
    console.log(`distance2 for ${n} :>>  ${distance2}`);
    if (dict[i] !== undefined) {
      r.push(i);
    }
    // if (keyIndices.includes(Math.abs(i - k))) {
    //   dict[i - k] = i;
    // }

    dict[distance1] = i;
    dict[distance2] = i;
  }
  console.log("dict :>> ", dict);
  console.log("r :>> ", r);
}

// doesnt work
export function findKDistantIndicesDecrement(
  nums: number[],
  key: number,
  k: number
) {
  const res: number[] = [];
  const dict: { [key: number]: number } = {};
  let count: number = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === key) {
      // if matches key, increment k by 1?
      count = k + 1;
      if (count > 0) {
        res.push(j);
      }
      console.log("first loop: res :>> ", res);
      console.log("first loop before decrement: count :>> ", count);
      count -= 1;
      console.log("first loop after decrement: count :>> ", count);
    }
  }
  console.log("after for loop: count :>> ", count);
  count = 0;
  console.log("after first loop: res :>> ", res);
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] == key) {
      count = k + 1;
    }
    if (count > 0) {
      res.push(i);
    }
    count -= 1;
    console.log(" count :>> ", count);
  }
  console.log("res :>> ", res);
  console.log("after second for loop: count :>> ", count);
  return res;
}
