import { sockMerchant } from "./sock-merchant";

describe("How many pairs of socks", () => {
  it("7, [1, 2, 1, 2, 1, 3, 2]", () => {
    expect(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2])).toEqual(2);
  });
  it("9, [10, 20, 20, 10, 10, 30, 50, 10, 20]", () => {
    expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toEqual(3);
  });
  it("10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]", () => {
    expect(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])).toEqual(4);
  });
});
