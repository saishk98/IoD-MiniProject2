// Game data stored in a single array for efficiency
const games = [
  { id: 1, name: "DC: Dark Legion", year: 2025 },
  { id: 2, name: "DC Heroes United", year: 2024 },
  { id: 3, name: "Batman: Arkham Shadow", year: 2024 },
  { id: 4, name: "Suicide Squad: Kill the Justice League", year: 2024 },
  { id: 5, name: "DC Heroes & Villains", year: 2022 },
  { id: 6, name: "Gotham Knights", year: 2022 },
  { id: 7, name: "LEGO DC Super-Villains", year: 2018 },
  { id: 8, name: "Injustice 2", year: 2017 },
  { id: 9, name: "DC Legends", year: 2016 },
  { id: 10, name: "Batman - The Telltale Series", year: 2016 },
  { id: 11, name: "Batman: Arkham Underworld", year: 2016 },
  { id: 12, name: "LEGO Dimensions", year: 2015 },
  { id: 13, name: "Batman: Arkham Knight", year: 2015 },
  { id: 14, name: "LEGO Batman 3: Beyond Gotham", year: 2014 },
  { id: 15, name: "Batman: Arkham Origins", year: 2013 },
  { id: 16, name: "Batman: Arkham Origins Blackgate", year: 2013 },
  { id: 17, name: "Injustice: Gods Among Us", year: 2013 },
  { id: 18, name: "LEGO Batman 2: DC Super Heroes", year: 2012 },
  { id: 19, name: "Gotham City Imposters", year: 2012 },
  { id: 20, name: "Batman: Arkham City Lockdown", year: 2011 },
  { id: 21, name: "Batman: Arkham City", year: 2012 },
  { id: 22, name: "DC Universe Online", year: 2011 },
  { id: 23, name: "Batman: Arkham Asylum", year: 2009 },
  { id: 24, name: "LEGO Batman: The Videogame", year: 2008 }
];

// Get all games
export const getAllGames = (req, res) => {
  res.json(games);
};

// Get a game by ID with error handling
export const getGameById = (req, res) => {
  const game = games.find((g) => g.id === parseInt(req.params.id));

  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  res.json(game);
};
