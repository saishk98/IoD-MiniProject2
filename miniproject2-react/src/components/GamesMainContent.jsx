import { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Ensure usage in JSX
import PopupModal from "./PopUpModal"; // Ensure consistent casing

const GamesMainContent = () => {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClassifications, setSelectedClassifications] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [showClassification, setShowClassification] = useState(true);
  const [showYear, setShowYear] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/games")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Games API Error:", error));
  }, []);

  const toggleSelection = (
    value,
    _selectedList,
    setSelectedList
  ) => {
    setSelectedList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesClassification =
      selectedClassifications.length === 0 ||
      selectedClassifications.includes(game.classification);
    const matchesYear =
      selectedYears.length === 0 || selectedYears.includes(game.year);
    return matchesSearch && matchesClassification && matchesYear;
  });

  const handleCardClick = (gameId) => {
    const game = games.find((g) => g.id === gameId);
    setSelectedGame(game);
    setPopupOpen(true);
  };

  return (
    <Box className="gamesContainer">
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
            onClick={() => setShowClassification(!showClassification)}
            sx={{ color: "#333", fontWeight: "bold" }}
          >
            CLASSIFICATION
          </Button>
          <Collapse in={showClassification}>
            <FormGroup>
              {["Arkham", "Lego", "Other"].map((option) => (
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
            onClick={() => setShowYear(!showYear)}
            sx={{ color: "#333", fontWeight: "bold" }}
          >
            YEAR
          </Button>
          <Collapse in={showYear}>
            <FormGroup>
              {["2000-2009", "2010-2019", "2020+"].map((option) => (
                <FormControlLabel
                  key={option}
                  control={
                    <Checkbox
                      checked={selectedYears.includes(option)}
                      onChange={() =>
                        toggleSelection(option, selectedYears, setSelectedYears)
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

      <Box className="gamesGrid">
        {filteredGames.map((game) => (
          <Box
            key={game.id}
            className="game-item"
            onClick={() => handleCardClick(game.id)}
            style={{ cursor: "pointer" }}
          >
            <img src={game.image} alt={game.name} />
            <p>{game.name}</p>
          </Box>
        ))}
      </Box>

      <PopupModal
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        content={selectedGame}
      />
    </Box>
  );
};

export default GamesMainContent;
