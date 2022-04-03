/**
 * maxProfit - Given an array that represents the value of a stock at a given time during a single trading day,
 * please return an array containing the two indices in which to [buy, sell] to achieve the maximum profit.
 * You may only buy before or at the same time that you sell.
 * e.g. [5,6,7,15,2,14....] => [0,3]
 *
 * @return {Array<number>} [Index, Index]
 */

export function buySellIndicesAlt(prices: number[]) {
  // loop over values, track best profit so far and the respective index
  // keep calculating possible profit at current index.
  // if find a max profit  higher then update lower index
  // if find a lower value than the lowest so far, then update the lowest seen so far
  // check the current against the lowestseen so far to see if the profit is greater, if it
  // is then update the profit index and maxprofit seen so far
  let indices: number[] = [];
  const dict: { [key: number]: number } = {};
  let bestProfitSoFar: number = 0;
  let sellIndex: number = 0;
  let buyIndex: number = 0;

  let lowestSoFar: number = 0;
  let iForLowestSoFar: number = 0;

  for (let [i, num] of prices.entries()) {
    console.log("{i, num} :>> ", { i, num });
    // continually update lowest seen so far
    if (num < lowestSoFar) {
      lowestSoFar = num;
      iForLowestSoFar = i;
    }
    // if find a better possible profit then update:
    // bestProfitSoFar
    //
    if (num - lowestSoFar > bestProfitSoFar) {
      buyIndex = iForLowestSoFar;
      sellIndex = i;
      bestProfitSoFar = num - lowestSoFar;
    }
    // otherwise dont update the buyIndex, sellIndex, nor bestProfitSoFar
  }
  return [buyIndex, sellIndex];
}

export function maxProfit(prices: number[]) {}

// console.log(buySellIndicesAlt([5, 6, 7, 15, 2, 14]));

export function buySellIndices(prices: number[]) {
  let minSoFar: number = 0;
  let minSoFarIndex: number = 0;
  let maxProfitSoFar: number = 0;
  let sellIndex: number = 0;
  let buyIndex: number = 0;

  prices.forEach((p: number, i: number, arr: number[]) => {
    if (p < minSoFar) {
      minSoFar = p;
      minSoFarIndex = i;
    }

    if (p - minSoFar > maxProfitSoFar) {
      buyIndex = minSoFarIndex;
      sellIndex = i;
      maxProfitSoFar = p - minSoFar;
    }
  });
  return [buyIndex, sellIndex];
}
