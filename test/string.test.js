const { StringUtils } = require("../dist");

describe("StringUtils", () => {
  describe("trim", () => {
    test("should remove whitespace from beginning and end of string", () => {
      const input = "  Hello, world!  ";
      const expectedOutput = "Hello, world!";
      const actualOutput = StringUtils.trim(input);
      expect(actualOutput).toEqual(expectedOutput);
    });
  });

  describe("toUpperCase", () => {
    test("should convert string to uppercase", () => {
      const input = "Hello, world!";
      const expectedOutput = "HELLO, WORLD!";
      const actualOutput = StringUtils.toUpperCase(input);
      expect(actualOutput).toEqual(expectedOutput);
    });
  });

  describe("toLowerCase", () => {
    test("should convert string to lowercase", () => {
      const input = "Hello, world!";
      const expectedOutput = "hello, world!";
      const actualOutput = StringUtils.toLowerCase(input);
      expect(actualOutput).toEqual(expectedOutput);
    });
  });

  describe("countChars", () => {
    test("should count the number of characters in a string", () => {
      const input = "Hello, world!";
      const expectedOutput = 13;
      const actualOutput = StringUtils.countCharacters(input);
      expect(actualOutput).toEqual(expectedOutput);
    });
  });

  describe("replace", () => {
    test("should replace all occurrences of a substring with another substring", () => {
      const input = "Hello, world!";
      const expectedOutput = "Hella, warld!";
      const actualOutput = StringUtils.replace(input, ["o", "e"], "a");
      expect(actualOutput).toEqual(expectedOutput);
    });
  });

  describe("substring", () => {
    test("should extract a substring from a string", () => {
      const input = "Hello, world!";
      const expectedOutput = "world!";
      const actualOutput = StringUtils.substring(input, [7]);
      expect(actualOutput).toEqual(expectedOutput);
    });
  });

  describe("pad", () => {
    test("should pad a string with a specified character to a specified length", () => {
      const input = "Hello, world!";
      const expectedOutput = "Hello, world!.......";
      const actualOutput = StringUtils.pad(input, [20, "."]);
      expect(actualOutput).toEqual(expectedOutput);
    });
  });
});
