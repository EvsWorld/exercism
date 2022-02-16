import { incrementArray } from "./increment-array";

describe("Hello World", () => {
  it("[1,2,3]", () => {
    expect(incrementArray([1, 2, 3])).toEqual([1, 2, 4]);
  });
  it("[1,2,3,9]", () => {
    expect(incrementArray([1, 2, 3, 9])).toEqual([1, 2, 4, 0]);
  });
});
