import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "../../../src/components/Footer";

describe("Footer tests", () => {
  it("renders hello message", () => {
    render(<Footer />);
    screen.debug();

    expect(
      screen.getByText("BATMAN. DEVELOPED BY SAISH KOTHARE", {
        exact: false,
      })
    ).toBeInTheDocument();
  });
});
