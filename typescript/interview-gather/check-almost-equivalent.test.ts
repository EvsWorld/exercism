import { checkAlmostEquivalent } from "./check-almost-equivalent";

describe("check if two strings almost equivalent", () => {
  it("are NOT equivalent", () => {
    expect(checkAlmostEquivalent("aaaa", "bccb")).toEqual(false);
  });
});
