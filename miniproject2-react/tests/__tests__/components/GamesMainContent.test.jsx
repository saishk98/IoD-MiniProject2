import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import GamesMainContent from "../../../src/components/GamesMainContent";

describe("GamesMainContent Component", () => {
    it("renders the search field", () => {
        render(<GamesMainContent />);
        expect(screen.getByLabelText("Filter by keyword")).toBeInTheDocument();
    });

    it("renders classification filter button", () => {
        render(<GamesMainContent />);
        expect(screen.getByText("CLASSIFICATION")).toBeInTheDocument();
    });

    it("renders year filter button", () => {
        render(<GamesMainContent />);
        expect(screen.getByText("YEAR")).toBeInTheDocument();
    });

    it("displays game images", () => {
        render(<GamesMainContent />);
        expect(screen.getByAltText("Game 1")).toBeInTheDocument();
        expect(screen.getByAltText("Game 2")).toBeInTheDocument();
    });

    it("filters games based on keyword", () => {
        render(<GamesMainContent />);
        const searchField = screen.getByLabelText("Filter by keyword");
        fireEvent.change(searchField, { target: { value: "Game 1" } });
        expect(screen.getByText("Game 1")).toBeInTheDocument();
        expect(screen.queryByText("Game 2")).not.toBeInTheDocument();
    });

    it("opens popup modal when a game is clicked", () => {
        render(<GamesMainContent />);
        const gameCard = screen.getByText("Game 1");
        fireEvent.click(gameCard);
        expect(screen.getByRole("dialog")).toBeInTheDocument();
        expect(screen.getByText("Test game description")).toBeInTheDocument();
    });
});