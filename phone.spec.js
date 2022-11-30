const isPhoneNumber = require("./phone");

describe("Phone", () => {
  test("should recognize a correct number with +49", () => {
    expect(isPhoneNumber("+49123456789")).toBeTruthy();
  });
  test("should recognize a correct number with 0", () => {
    expect(isPhoneNumber("0123456789")).toBeTruthy();
  });
  test("should recognize a correct number with 0 and", () => {
    expect(isPhoneNumber("0 123456789")).toBeTruthy();
  });
  test("should recognize a correct number with +49", () => {
    expect(isPhoneNumber("+49 123456789")).toBeTruthy();
  });
  test("should recognize a correct number with +49", () => {
    expect(isPhoneNumber("12323")).toBeFalsy();
  });
});
