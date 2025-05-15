let {
  getAllCharacters,
  getCharacterById,
} = require("../src/controllers/charactersController");

describe("Characters Controller", () => {
  test("should return all characters", () => {
    console.log("test", getAllCharacters);
    const req = {};
    const res = { json: jest.fn() };
    getAllCharacters(req, res);
    expect(res.json).toHaveBeenCalledWith(expect.any(Array));
  });

  test("should return correct character by ID", () => {
    const req = { params: { id: "1" } };
    const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };
    getCharacterById(req, res);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ id: 1 }));
  });

  test("should return 404 for invalid ID", () => {
    const req = { params: { id: "99" } };
    const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };
    getCharacterById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: "Character not found" });
  });
});
