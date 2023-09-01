import { render, screen } from '@testing-library/react';
import App from '../src/App';
import '@testing-library/jest-dom'
import { expect } from 'vitest';

describe("App component", () => {
  it("renders the HomePage component", () => {
    render(<App />);
    const homePageText = screen.getByRole("heading", { name: /Welcome to / });
    expect(homePageText).toBeInTheDocument();
  });

  it("renders the HomePage component", () => {
    render(<App />);
    const homePageElement = screen.getByTestId("home-page"); 
    expect(homePageElement).toBeInTheDocument();
  });

  it("renders the NavBar component", () => {
    render(<App />);
    const navBar = screen.getByTestId("navBar");
    expect(navBar).toBeInTheDocument()
  })
});