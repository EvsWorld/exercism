import {
  hasIdenticalSetOfUniqueCharactersLong,
  hasIdenticalSetOfUniqueCharactersOnePass,
  isUnique,
} from "./unique-characters";

describe("hasIdenticalSetOfUniqueCharactersLong", () => {
  it("Returns true for unique characters", () => {
    expect(
      hasIdenticalSetOfUniqueCharactersLong("abcdefgh", "hgfedcbbaaa")
    ).toEqual(true);
  });
  it("Returns false bc not indentical characters", () => {
    expect(hasIdenticalSetOfUniqueCharactersLong("abcdefgh", "ab")).toEqual(
      false
    );
  });
  it("Returns true bc has exact identical characters", () => {
    expect(
      hasIdenticalSetOfUniqueCharactersLong("aaaabcccccdefg", "abcdefggggg")
    ).toEqual(true);
  });
  it("Returns false bc not identical chars ", () => {
    expect(
      hasIdenticalSetOfUniqueCharactersLong("cccccdefg", "abcdefggggg")
    ).toEqual(false);
  });
});

describe("hasIdenticalSetOfUniqueCharactersOnePass", () => {
  it("Returns true for unique characters", () => {
    expect(
      hasIdenticalSetOfUniqueCharactersOnePass("abcdefgh", "hgfedcbbaaa")
    ).toEqual(true);
  });
  it("Returns false bc not identical chars", () => {
    expect(hasIdenticalSetOfUniqueCharactersOnePass("abbcdefgh", "ab")).toEqual(
      false
    );
  });
  it("Returns false bc characters duplicated", () => {
    expect(
      hasIdenticalSetOfUniqueCharactersLong("cccccdefg", "abcdefggggg")
    ).toEqual(false);
  });
});

describe("Is string made of unique characters?", () => {
  it("Finds that strings characters are not unique", () => {
    expect(isUnique("abbcdefgh")).toEqual(false);
  });
  it("Finds that strings characters are unique", () => {
    expect(isUnique("abcdefgh")).toEqual(true);
  });
});
