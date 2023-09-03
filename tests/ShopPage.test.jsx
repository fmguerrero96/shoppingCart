import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import ShopPage from '../src/components/ShopPage'

describe("ShopPage component", () => {
    it("Renders ShopPage component", () => {
        const sampleCart = ['helo']
        render(
            <BrowserRouter>
                <ShopPage cart={sampleCart} />
            </BrowserRouter>
        );
        const shopPageElement = screen.getByTestId("shopPage"); 
        expect(shopPageElement).toBeInTheDocument();
    });
});