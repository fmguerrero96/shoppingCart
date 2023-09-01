import { render, screen } from '@testing-library/react';
import App from '../src/App';
import '@testing-library/jest-dom'

describe("App component", () => {
  it("renders the HomePage component", () => {
    render(<App />);
    const homePageText = screen.getByRole("heading", { name: /Welcome to / });
    expect(homePageText).toBeInTheDocument();
  });

  it("renders the HomePage component", () => {
    render(<App />);
    const homePageElement = screen.getByTestId("home-page"); // Assuming you set a test ID for HomePage
    expect(homePageElement).toBeInTheDocument();
  });
});