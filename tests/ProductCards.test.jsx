import { render, screen } from '@testing-library/react';
import ProductCards from '../src/components/ProductCards';
import '@testing-library/jest-dom'
import { describe, expect } from 'vitest';
import { BrowserRouter } from "react-router-dom";

describe("ProductCards component", () => {
    it('Indicates that the products are loading', () => {
        // const products = []
        render(
            <BrowserRouter>
                <ProductCards />
            </BrowserRouter>
        );
        const loadingMessage = screen.getByText("Loading products..."); 
        expect(loadingMessage).toBeInTheDocument();
    })
});