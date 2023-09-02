import HomePage from "../src/components/HomePage";
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom"; 

describe("HomePage component", () => {
    const sampleCart = ['helo']
    it("Renders HomePage component", () => {
        render(
            <BrowserRouter>
                <HomePage cart={sampleCart} />
            </BrowserRouter>
        );
        const homePageElement = screen.getByTestId("home-page"); 
        expect(homePageElement).toBeInTheDocument();
    });

    it("Displays appropriate description message", () => {
        const sampleCart = ['helo']
        render(
            <BrowserRouter>
                <HomePage cart={sampleCart} />
            </BrowserRouter>
        );
        const description = screen.getByText(/Discover the latest trends in mock fashion at FakeFashion! Explore our wide range of non-existent clothing, shoes, and accessories./i)
        expect(description).toBeInTheDocument
    });
});