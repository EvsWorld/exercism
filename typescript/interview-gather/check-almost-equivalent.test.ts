import { checkAlmostEquivalent } from "./check-almost-equivalent";

describe("check if two strings almost equivalent", () => {
  it("are NOT equivalent", () => {
    expect(checkAlmostEquivalent("aaaa", "bccb")).toEqual(false);
  });
  it("ARE equivalent", () => {
    expect(checkAlmostEquivalent("abcdeef", "abaaacc")).toEqual(true);
  });
  it("ARE equivalent", () => {
    expect(checkAlmostEquivalent("cccddabba", "babababab")).toEqual(true);
  });
  it("are NOT equivalent", () => {
    expect(checkAlmostEquivalent("zzzyyy", "iiiiii")).toEqual(false);
  });
  it("are NOT equivalent", () => {
    expect(checkAlmostEquivalent("bccb", "zzzz")).toEqual(false);
  });
});
