import { useEffect, useState } from "react";
import {
  Box,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Collapse,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PopupModal from "./PopUpModal"; // Ensure consistent casing

const CharactersMainContent = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClassifications, setSelectedClassifications] = useState([]);
  const [selectedArchetypes, setSelectedArchetypes] = useState([]);
  const [showClassifications, setShowClassifications] = useState(true);
  const [showArchetypes, setShowArchetypes] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/characters")
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Characters API Error:", error));
  }, []);

  /**
   * Handles clicking on a character card by fetching character details and opening the popup.
   * @param {number|string} characterId
   */
  const handleCardClick = (characterId) => {
    fetch(`http://localhost:3000/api/characters/${characterId}`)
      .then((response) => response.json())
      .then((data) => setSelectedCharacter(data))
      .catch((error) => console.error("Character API Error:", error));

    setPopupOpen(true);
  };

  /**
   * Toggles selection in a filter list.
   * @param {string} value
   * @param {string[]} selectedList
   * @param {Function} setSelectedList
   */
  const toggleSelection = (value, selectedList, setSelectedList) => {
    setSelectedList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const filteredCharacters = characters.filter((character) => {
    const matchesSearch = character.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesClassification =
      selectedClassifications.length === 0 ||
      selectedClassifications.includes(character.classification);
    const matchesArchetype =
      selectedArchetypes.length === 0 ||
      selectedArchetypes.includes(character.archetype);
    return matchesSearch && matchesClassification && matchesArchetype;
  });

  return (
    <Box className="charactersContainer">
      {/* Sidebar Filters */}
      <Box className="sidebar">
        <TextField
          label="Filter by keyword"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 3 }}
        />

        <Box sx={{ mb: 3 }}>
          <Button
            endIcon={<ExpandMoreIcon />}
            onClick={() => setShowClassifications((prev) => !prev)}
            sx={{ color: "#333", fontWeight: "bold" }}
          >
            CLASSIFICATION
          </Button>
          <Collapse in={showClassifications}>
            <FormGroup>
              {["Arkham", "Animated Series"].map((option) => (
                <FormControlLabel
                  key={option}
                  control={
                    <Checkbox
                      checked={selectedClassifications.includes(option)}
                      onChange={() =>
                        toggleSelection(
                          option,
                          selectedClassifications,
                          setSelectedClassifications
                        )
                      }
                    />
                  }
                  label={option}
                />
              ))}
            </FormGroup>
          </Collapse>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Button
            endIcon={<ExpandMoreIcon />}
            onClick={() => setShowArchetypes((prev) => !prev)}
            sx={{ color: "#333", fontWeight: "bold" }}
          >
            ARCHETYPE
          </Button>
          <Collapse in={showArchetypes}>
            <FormGroup>
              {["Heroes", "Villains"].map((option) => (
                <FormControlLabel
                  key={option}
                  control={
                    <Checkbox
                      checked={selectedArchetypes.includes(option)}
                      onChange={() =>
                        toggleSelection(
                          option,
                          selectedArchetypes,
                          setSelectedArchetypes
                        )
                      }
                    />
                  }
                  label={option}
                />
              ))}
            </FormGroup>
          </Collapse>
        </Box>
      </Box>

      {/* Grid */}
      <Box className="characterGrid">
        {filteredCharacters.map((char) => (
          <Box
            key={char.id}
            className="characterImageContainer"
            onClick={() => handleCardClick(char.id)}
            style={{ cursor: "pointer" }}
          >
            <img src={char.image} alt={char.name} />
            <p>{char.name}</p>
          </Box>
        ))}
      </Box>

      <PopupModal
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        content={selectedCharacter}
      />
    </Box>
  );
};

export default CharactersMainContent;
