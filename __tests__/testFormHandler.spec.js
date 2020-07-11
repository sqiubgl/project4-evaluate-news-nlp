// import { handleSubmit,postData } from "../src/client/js/formHandler";
const formHandler = require("../src/client/js/formHandler");

describe("Testing the submit functionality", () => {
  test("Test if handleSubmit() is defined", () => {
    expect(formHandler).toBeDefined();
  });
  test("Test formHandler postData", async (done) => {
    const data = await formHandler.postData("http://localhost:8081/api", {});
    expect(data.polarity).toBe("neutral");
    done();
  });
});
