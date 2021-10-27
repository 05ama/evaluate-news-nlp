import { handleSubmit } from "../src/client/js/formHandler";
describe("Confirm the handeling of submitted values", () => {
  test("Function is defined", () => {
    expect(handleSubmit).toBeDefined();
  });
});
