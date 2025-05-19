import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CharactersMainContent from "../../../src/components/CharactersMainContent";

describe("CharactersMainContent Component", () => {
    it("renders the search field", () => {
        render(<CharactersMainContent />);
        expect(screen.getByLabelText("Filter by keyword")).toBeInTheDocument();
    });

    it("renders classification filter button", () => {
        render(<CharactersMainContent />);
        expect(screen.getByText("CLASSIFICATION")).toBeInTheDocument();
    });

    it("renders archetype filter button", () => {
        render(<CharactersMainContent />);
        expect(screen.getByText("ARCHETYPE")).toBeInTheDocument();
    });

    it("displays character images", () => {
        render(<CharactersMainContent />);
        expect(screen.getByAltText("Batman")).toBeInTheDocument();
        expect(screen.getByAltText("Joker")).toBeInTheDocument();
    });

    it("filters characters based on keyword", () => {
        render(<CharactersMainContent />);
        const searchField = screen.getByLabelText("Filter by keyword");
        fireEvent.change(searchField, { target: { value: "Batman" } });
        expect(screen.getByText("Batman")).toBeInTheDocument();
        expect(screen.queryByText("Joker")).not.toBeInTheDocument();
    });

    it("opens popup modal when a character is clicked", () => {
        render(<CharactersMainContent />);
        const characterCard = screen.getByText("Batman");
        fireEvent.click(characterCard);
        expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
});
