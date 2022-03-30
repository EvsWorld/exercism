/**
 * maxProfit - Given an array that represents the value of a stock at a given time during a single trading day,
 * please return an array containing the two indices in which to [buy, sell] to achieve the maximum profit.
 * You may only buy before or at the same time that you sell.
 * e.g. [5,6,7,15,2,14....] => [0,3]
 *
 * @return {Array<number>} [Index, Index]
 */
function maxProfit(prices: number[]) {
  let minSoFar: number = 0;
  let minSoFarIndex: number = 0;
  let maxProfitSoFar: number = 0;
  let sellIndex: number = 0;
  let buyIndex: number = 0;

  // let prevMin : number
  // let prevMinIndex : number
  // let prevMax : number
  // let prevMaxIndex : number

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
console.log(maxProfit([5, 6, 7, 15, 2, 14]));
