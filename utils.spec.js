const {
  add,
  substract,
  multiply,
  divide,
  percentage,
  factorial,
  fibonacci,
} = require("./utils");

describe("Utils", () => {
  describe("add", () => {
    it("adds two numbers together", () => {
      const result = add(1, 2);
      expect(result).toBe(3);
    });
    it("adds negative number with positive numbers ", () => {
      const result = add(-1, 2);
      expect(result).toBe(1);
    });
    it("adds decimal numbers ", () => {
      const result = add(0.1, 0.2);
      expect(result).toBeCloseTo(0.3);
    });
  });
  describe("substract", () => {
    it("substracts two numbers together", () => {
      const result = substract(1, 2);
      expect(result).toBe(-1);
    });
    it("substracts negative number with positive numbers ", () => {
      const result = substract(-1, 2);
      expect(result).toBe(-3);
    });
    it("substracts decimal numbers ", () => {
      const result = substract(0.1, 0.2);
      expect(result).toBeCloseTo(-0.1);
    });
  });
});
