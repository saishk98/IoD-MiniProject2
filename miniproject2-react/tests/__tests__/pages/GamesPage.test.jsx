import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import GamesPage from "../../../src/pages/GamesPage";

describe("GamesPage", () => {
    it("renders page title", () => {
        render(<GamesPage />);
        const pageTitle = screen.getByText("DC Games");
        expect(pageTitle).toBeInTheDocument();
    });
});