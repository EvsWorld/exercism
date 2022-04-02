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

// this is inefficient. need to use hash table somehow
export function findKDistantIndices(nums: number[], key: number, k: number) {
  const res: number[] = [];
  const dict: { [key: number]: number } = {};

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === key) {
      console.log("\nj :>> ", j);
      for (let [i, num] of nums.entries()) {
        // console.log("num :>> ", num);
        // const distance = Math.abs(i - k);
        // dict[distance] = i;
        if (Math.abs(i - j) <= k) {
          res.push(i);
        }
      }
    }
  }
  console.log("dict :>> ", dict);
  const resUnique = [...new Set(res)];
  console.log("resUnique :>> ", resUnique);
  return resUnique;
}
