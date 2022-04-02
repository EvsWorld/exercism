import { firstElementKTimes } from "./first-element-k-times";
describe("first-element-k-times ", () => {
  it.only("success possible", () => {
    expect(firstElementKTimes([1, 7, 4, 3, 4, 8, 7], 7, 2)).toEqual(4);
  });
  it("success not possible", () => {
    expect(firstElementKTimes([5, 4, 3, 4], 4, 3)).toEqual(-1);
  });
});
