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
});