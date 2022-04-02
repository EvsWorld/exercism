export function twoSum(nums: number[], target: number): number[] | undefined {
  // make dictionary with indexas as keys, then the value of the number that if
  // found would be the first match as value
  // {
  // 	   7: 0,  (9-2=7 : index 0)
  // 	   2: 1,  (9-7=2 : index 1)
  // 	  -2: 2
  // 	  -6: 3
  // }

  const dict: { [key: number]: number } = {};
  // make dictionary with keys of the difference between target and the other
  // number that would sum to target.  This is making a dictionary that you can
  // look up the thing to want (the values) BY the thing you have (the keys) In
  // this case, you have the difference (and thats what youll be searching for )
  // and you want to know the index for the one where it matches
  for (let [index, num] of nums.entries()) {
    // if there exists in the dictionary a key (difference) for the current
    // number, then we have the two indexes we need. One is the index in the
    // dictionary at the key signifying the difference, and the other is the
    // current index the
    if (dict[num] !== undefined) {
      return [dict[num], index];
    }
    dict[target - num] = index;
    // console.log("dict :>> ", dict);
  }
}
