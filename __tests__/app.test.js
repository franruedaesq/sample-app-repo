const request = require("supertest");
const app = require("../index"); // Import your app

describe("GET /", () => {
  it("should respond with a welcome message", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Hello from Sample App!");
  });
});

describe("GET /health", () => {
  it("should respond with a health status of UP", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("UP");
  });

  // This is a deliberately failing test to generate interesting reports
  it("should fail this test to simulate a regression", () => {
    expect(false).toBe(true);
  });
});
