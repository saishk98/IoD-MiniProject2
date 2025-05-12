const request = require("supertest");
const express = require("express");

const app = express();

app.get("/", (_, res) => {
  res.status(200).send("Express API is running!");
});

describe("GET /", () => {
  it("should return a success message and match snapshot", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Express API is running!");
    expect(response).toMatchSnapshot(); // 🔹 Adds snapshot testing
  });
});
