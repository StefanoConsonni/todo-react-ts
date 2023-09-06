import { getRequestOptions } from ".";

describe("getRequestOptions function", () => {
  it("should return the expected request options for a given HTTP method and data", () => {
    // Define test data
    const httpMethod = "POST";
    const data = { key: "value" };
    // Expected result based on the test data
    const expectedOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const result = getRequestOptions(httpMethod, data);

    expect(result).toEqual(expectedOptions);
  });
});
