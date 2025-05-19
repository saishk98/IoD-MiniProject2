import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import GamesCarousel from "../../../src/components/GamesCarousel";

describe("Games Carousel test", () => {
  it("renders the first image initially", () => {
    render(<GamesCarousel />);
    const firstImage = screen.getByAltText("carousel-0");
    expect(firstImage).toBeInTheDocument();
  });
});
