import { incrementArray, incrementArrayFor } from "./increment-array";

describe("Increment array solution with easy js methods ", () => {
  it("[1,2,3]", () => {
    expect(incrementArray([1, 2, 3])).toEqual([1, 2, 4]);
  });
  it("[1,2,3,9]", () => {
    expect(incrementArray([1, 2, 3, 9])).toEqual([1, 2, 4, 0]);
  });
  it("[9,9,9]", () => {
    expect(incrementArray([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });
});

describe("incrementArrayFor (reverse) ", () => {
  it("[1,2,3]", () => {
    expect(incrementArrayFor([1, 2, 3])).toEqual([1, 2, 4]);
  });
  it("[1,2,3,9]", () => {
    expect(incrementArrayFor([1, 2, 3, 9])).toEqual([1, 2, 4, 0]);
  });
  it("[9,9,9]", () => {
    expect(incrementArrayFor([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });
});
