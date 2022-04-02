import { twoSum } from "./two-sum";

describe("two sum", () => {
  it("success possible", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  it("success  possible", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
  it("success  possible", () => {
    expect(twoSum([7, 3, 5], 8)).toEqual([1, 2]);
  });
  it("success  possible", () => {
    expect(twoSum([7, 2, 13, 11, 8], 24)).toEqual([2, 3]);
  });
});
