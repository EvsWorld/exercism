import {
  incrementArray,
  incrementArrayFor,
  incrementArrayFor2,
} from "./increment-array";

xdescribe("Increment array solution 1 ", () => {
  it("[1,2,3]", () => {
    expect(incrementArray([1, 2, 3])).toEqual([1, 2, 4]);
  });
  it("[1,2,3,9]", () => {
    expect(incrementArray([1, 2, 3, 9])).toEqual([1, 2, 4, 0]);
  });
});

xdescribe("Increment array solution 1 ", () => {
  it("[1,2,3]", () => {
    expect(incrementArrayFor([1, 2, 3])).toEqual([1, 2, 4]);
  });
  it("[1,2,3,9]", () => {
    expect(incrementArrayFor([1, 2, 3, 9])).toEqual([1, 2, 4, 0]);
  });
  xit("[9,9,9]", () => {
    expect(incrementArrayFor([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });
});

describe("Increment array solution 1 ", () => {
  it.only("[1,2,3]", () => {
    expect(incrementArrayFor2([1, 2, 3])).toEqual([1, 2, 4]);
  });
  it("[1,2,3,9]", () => {
    expect(incrementArrayFor2([1, 2, 3, 9])).toEqual([1, 2, 4, 0]);
  });
  xit("[9,9,9]", () => {
    expect(incrementArrayFor2([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });
});
