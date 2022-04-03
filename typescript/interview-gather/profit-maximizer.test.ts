import {
  maxProfit,
  buySellIndicesAlt,
  buySellIndices,
} from "./profit-maximizer";

describe("returns indices for buy ans sell", () => {
  it.only("1", () => {
    expect(buySellIndices([5, 6, 7, 15, 2, 14])).toEqual([0, 3]);
  });
});

describe("returns indices for buy ans sell", () => {
  it.only("alt", () => {
    expect(buySellIndicesAlt([5, 6, 7, 15, 2, 14])).toEqual([0, 3]);
  });
});

describe("returns max profit possible", () => {
  it("profit possible", () => {
    expect(maxProfit([5, 6, 7, 15, 2, 14])).toEqual(10);
  });
});
