import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { describe, it } from "vitest";

describe("App component", () => {
  it("renders the HomePage component", () => {
    render(<App />);
    const homePageText = screen.getByRole("heading", { name: /Welcome to / });
    expect(homePageText).toBeInTheDocument();
  });
}); 