import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing the submit functionality", () => {
  test("Test if handleSubmit() is defined", () => {
    expect(handleSubmit).toBeDefined();
  });
  test("Test if post is working", async (done) => {
    const data = await handleSubmit("http://localhost:8081/api", {
      text: "ABC Test",
    });
    expect(data.text).toBe("ABC Test");
    done();
  });
});
