import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CharactersPage from "../../../src/pages/CharactersPage";

describe("CharactersPage", () => {
    it("renders page title", () => {
        render(<CharactersPage />);
        const pageTitle = screen.getByText("DC Characters");
        expect(pageTitle).toBeInTheDocument();
    });

    it("displays character names", () => {
        render(<CharactersPage />);
        expect(screen.getByText("Batman")).toBeInTheDocument();
        expect(screen.getByText("Joker")).toBeInTheDocument();
    });
});