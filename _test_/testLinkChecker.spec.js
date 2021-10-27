import { checkForLink } from "../src/client/js/linkChecker";
describe("Confirm Link checking is functional", () => {
  test("Function is defined", () => {
    expect(checkForLink).toBeDefined();
  });

  test("Valid Link returns true", () => {
    expect(checkForLink("https://www.example.com")).toBe(true);
  });

  test("Invalid Link returns false", () => {
    expect(checkForLink("example.com")).toBe(false);
  });
});
