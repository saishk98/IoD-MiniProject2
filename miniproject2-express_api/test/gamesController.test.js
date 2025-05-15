const {
  getAllGames,
  getGameById,
} = require("../src/controllers/gamesController");

describe("Games Controller", () => {
  test("should return all games", () => {
    const req = {};
    const res = { json: jest.fn() };
    getAllGames(req, res);
    expect(res.json).toHaveBeenCalledWith(expect.any(Array));
  });

  test("should return correct game by ID", () => {
    const req = { params: { id: "1" } };
    const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };
    getGameById(req, res);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ id: 1 }));
  });

  test("should return 404 for invalid ID", () => {
    const req = { params: { id: "99" } };
    const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };
    getGameById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: "Game not found" });
  });
});
