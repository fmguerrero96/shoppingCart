import { render, screen } from '@testing-library/react';
import NavBar from '../src/components/navBar';
import '@testing-library/jest-dom'
import { expect } from 'vitest';
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

describe("NavBar component", () => {
it("renders NavBar compoent", () => {
    const sampleCart = ['helo']
    render(<BrowserRouter>
        <NavBar cart={sampleCart} />
      </BrowserRouter>);
    const navBarCompoent = screen.getByTestId("navBar"); 
    expect(navBarCompoent).toBeInTheDocument();
    });
});