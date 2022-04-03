// Faster than the while loop, but uses more memory
// O(N)
export function containsDuplicateDict(nums: number[]): boolean {
  // loop over array, check dictionary for if theres an entry there yet, if
  // there is then return false, else add to dictionary,
  // for (let [i, num] of nums.entries()) {
  const dict: { [key: number]: string } = {};
  for (let i = 0; i < nums.length; i++) {
    if (dict[nums[i]] === undefined) {
      dict[nums[i]] = "haha";
    } else {
      return true;
    }
  }

  return false;
}

// slower than dictionary method, but uses less memory
// O NlogN
export function containsDuplicateLessMemory(nums: number[]): boolean {
  const sorted = nums.sort();
  console.log("sorted :>> ", sorted);
  for (let i = 0, last = nums[i]; i < nums.length; i++) {
    if (i > 0 && nums[i] === last) {
      return true;
    }
    last = nums[i];
  }
  return false;
}

// same as above with slight change
// slower than dictionary method, but uses less memory
// O NlogN
export function containsDuplicateLessMemoryAlt(nums: number[]): boolean {
  const sorted = nums.sort();
  console.log("sorted :>> ", sorted);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      return true;
    }
  }
  return false;
}

export function containsDuplicateWhile(nums: number[]): boolean {
  const dict: { [key: number]: string } = {};
  let i = 0,
    len = nums.length;
  while (i < len) {
    if (dict[nums[i]] === undefined) {
      dict[nums[i]] = "haha";
    } else {
      return true;
    }

    i++;
  }
  return false;
}
