import { findKDistantIndices } from "./find-k-distant-indices";

describe("two sum", () => {
  it.only("success possible", () => {
    expect(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
  it("success  possible", () => {
    expect(findKDistantIndices([2, 2, 2, 2, 2], 2, 2)).toEqual([0, 1, 2, 3, 4]);
  });
});
