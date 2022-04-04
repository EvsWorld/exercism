import { checkAlmostEquivalent } from "./check-almost-equivalent";

describe("check if two strings almost equivalent", () => {
  it.only("are NOT equivalent", () => {
    expect(checkAlmostEquivalent("aaaa", "bccb")).toEqual(false);
  });
  it.only("ARE equivalent", () => {
    expect(checkAlmostEquivalent("abcdeef", "abaaacc")).toEqual(true);
  });
  it.only("ARE equivalent", () => {
    expect(checkAlmostEquivalent("cccddabba", "babababab")).toEqual(true);
  });
  it.only("are NOT equivalent", () => {
    expect(checkAlmostEquivalent("zzzyyy", "iiiiii")).toEqual(false);
  });
});
