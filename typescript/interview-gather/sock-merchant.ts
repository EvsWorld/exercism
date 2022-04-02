//https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

// There is a large pile of socks that must be paired by color. Given an array
// of integers representing the color of each sock, determine how many pairs of
// socks with matching colors there are.

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock

// Example
// n = 7
// ar = [1,2,1,2,1,3,2]

// There is one pair of color 1 and one of color 2.  There are three odd socks
// left, one of each color.  The number of pairs is 2.

function getOccurrence<T>(arr: T[], value: T) {
  let count = 0;
  arr.forEach((n) => {
    n === value && count++;
  });
  return count;
}

export function sockMerchant(n: number, ar: number[]): number {
  // Write your code here
  let pairs: number = 0;

  // get uniques, loop over uniques, count how many of each unique are in the
  // original array, then for each color, do % 2, then thats how many of that
  // color, then add up how many pairs of each color

  const uniques = new Set(ar);
  // console.log("uniques :>> ", uniques);

  uniques.forEach((num: number, key: number) => {
    // console.log("num :>> ", num);
    // console.log("key :>> ", key);
    // count how many in ar then add to dict
    const howMany = getOccurrence(ar, num);
    // console.log(`howMany ${num} :>> , ${howMany}`);
    const howManyPairs = Math.floor(howMany / 2);
    // console.log(`howManyPairs ${num} :>> , ${howManyPairs}`);
    pairs += howManyPairs;
    // console.log("pairs :>> ", pairs);
  });
  return pairs;
}
