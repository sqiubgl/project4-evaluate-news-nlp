import { checkForName } from "../src/client/js/nameChecker";

describe("Testing the name check functionality", () => {
  test("Testing the checkForName() function", () => {
    expect(checkForName).toBeDefined();
  });
});
