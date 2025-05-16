// Character data stored in a single array for efficiency
  const characters = [
    { id: 1, name: "Alfred Pennyworth", category: "Arkham" },
    { id: 2, name: "Bane", category: "Arkham" },
    { id: 3, name: "Batgirl", category: "Arkham" },
    { id: 4, name: "Batman", category: "Arkham" },
    { id: 5, name: "Black Mask", category: "Arkham" },
    { id: 6, name: "Calendar Man", category: "Arkham" },
    { id: 7, name: "Catwoman", category: "Arkham" },
    { id: 8, name: "Clayface", category: "Arkham" },
    { id: 9, name: "Copperhead", category: "Arkham" },
    { id: 10, name: "Deadshot", category: "Arkham" },
    { id: 11, name: "Deathstroke", category: "Arkham" },
    { id: 12, name: "Firefly", category: "Arkham" },
    { id: 13, name: "Harley Quinn", category: "Arkham" },
    { id: 14, name: "Hugo Strange", category: "Arkham" },
    { id: 15, name: "James Gordon", category: "Arkham"},
    { id: 16, name: "Killer Croc", category: "Arkham" },
    { id: 17, name: "Lucius Fox", category: "Arkham" },
    { id: 18, name: "Mad Hatter", category: "Arkham" },
    { id: 19, name: "Mr. Freeze", category: "Arkham" },
    { id: 20, name: "Nightwing", category: "Arkham" },
    { id: 21, name: "Oracle", category: "Arkham" },
    { id: 22, name: "Poison Ivy", category: "Arkham" },
    { id: 23, name: "Ra’s Al Ghul", category: "Arkham" },
    { id: 24, name: "Red Hood", category: "Arkham" },
    { id: 25, name: "Robin", category: "Arkham" },
    { id: 26, name: "Shiva", category: "Arkham" },
    { id: 27, name: "Solomon Grundy", category: "Arkham" },
    { id: 28, name: "Talia Al Ghul", category: "Arkham" },
    { id: 29, name: "The Arkham Knight", category: "Arkham" },
    { id: 30, name: "The Electrocutioner", category: "Arkham" },
    { id: 31, name: "The Joker", category: "Arkham" },
    { id: 32, name: "The Militia", category: "Arkham" },
    { id: 33, name: "The Penguin", category: "Arkham" },
    { id: 34, name: "The Riddler", category: "Arkham" },
    { id: 35, name: "The Scarecrow", category: "Arkham" },
    { id: 36, name: "Two-Face", category: "Arkham" },
    { id: 37, name: "TYGER", category: "Arkham" },
    { id: 38, name: "Victor Zsasz", category: "Arkham" },
    { id: 39, name: "Alfred Pennyworth", category: "Animated Series" },
    { id: 40, name: "Bane", category: "Animated Series" },
    { id: 41, name: "Barbara Gordon", category: "Animated Series" },
    { id: 42, name: "Batgirl", category: "Animated Series" },
    { id: 43, name: "Batman", category: "Animated Series" },
    { id: 44, name: "Bruce Wayne", category: "Animated Series" },
    { id: 45, name: "Catwoman", category: "Animated Series" },
    { id: 46, name: "Clayface", category: "Animated Series" },
    { id: 47, name: "Dick Grayson", category: "Animated Series" },
    { id: 48, name: "Dr. Leslie Thompkins", category: "Animated Series" },
    { id: 49, name: "Edward Nygma", category: "Animated Series" },
    { id: 50, name: "Harleen Quinzel", category: "Animated Series" },
    { id: 51, name: "Harley Quinn", category: "Animated Series" },
    { id: 52, name: "Harvey Dent", category: "Animated Series" },
    { id: 53, name: "Harvey Bullock", category: "Animated Series" },
    { id: 54, name: "Hugo Strange", category: "Animated Series" },
    { id: 55, name: "James Gordon", category: "Animated Series" },
    { id: 56, name: "Jervis Tetch", category: "Animated Series" },
    { id: 57, name: "Jonathan Crane", category: "Animated Series" },
    { id: 58, name: "Killer Croc", category: "Animated Series" },
    { id: 59, name: "Lucius Fox", category: "Animated Series" },
    { id: 60, name: "Mad Hatter", category: "Animated Series" },
  ];

// Get all characters
export const getAllCharacters = (req, res) => {
  res.json(characters);
};

// Get a character by ID with error handling
export const getCharacterById = (req, res) => {
  const character = characters.find((c) => c.id === parseInt(req.params.id));

  if (!character) {
    return res.status(404).json({ error: "Character not found" });
  }

  res.json(character);
};
