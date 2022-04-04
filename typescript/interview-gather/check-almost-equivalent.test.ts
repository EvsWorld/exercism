import { checkAlmostEquivalent } from "./check-almost-equivalent";

describe("check if two strings almost equivalent", () => {
  it("are NOT equivalent", () => {
    expect(checkAlmostEquivalent("aaaa", "bccb")).toEqual(false);
  });
  it.only("ARE equivalent", () => {
    expect(checkAlmostEquivalent("abcdeef", "abaaacc")).toEqual(true);
  });
  it("ARE equivalent", () => {
    expect(checkAlmostEquivalent("cccddabba", "babababab")).toEqual(true);
  });
});
