import { investingRisk } from "./investing-risk-rules";
describe("hasIdenticalSetOfUniqueCharactersOnePass", () => {
  it("Returns true for unique characters", () => {
    expect(investingRisk()).toEqual(6);
  });
});
