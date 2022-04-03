import {
  containsDuplicateLessMemoryAlt,
  containsDuplicateDict,
} from "./contains-duplicates";

describe("faster, more memory", () => {
  it("contains duplicates", () => {
    expect(containsDuplicateDict([1, 2, 3, 1])).toEqual(true);
  });
  it("does not contain duplicates", () => {
    expect(containsDuplicateDict([1, 2, 3, 4])).toEqual(false);
  });
  it("contains duplicates", () => {
    expect(containsDuplicateDict([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
  });
});

describe("Less memory", () => {
  it("contains duplicates", () => {
    expect(containsDuplicateLessMemoryAlt([1, 2, 3, 1])).toEqual(true);
  });
  it("does not contain duplicates", () => {
    expect(containsDuplicateLessMemoryAlt([1, 2, 3, 4])).toEqual(false);
  });
  it("contains duplicates", () => {
    expect(
      containsDuplicateLessMemoryAlt([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])
    ).toEqual(true);
  });
});
